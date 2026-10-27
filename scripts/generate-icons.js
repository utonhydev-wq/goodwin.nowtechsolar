import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

function createPNG(size, bgHex, fgHex) {
  // Parse hex colors
  const parseHex = (hex) => {
    hex = hex.replace('#', '');
    return [
      parseInt(hex.slice(0, 2), 16),
      parseInt(hex.slice(2, 4), 16),
      parseInt(hex.slice(4, 6), 16),
      255
    ];
  };

  const bg = parseHex(bgHex);
  const fg = parseHex(fgHex);
  const accent = [245, 158, 11, 255]; // Amber #f59e0b

  // Raw bitmap: each row has 1 filter byte (0) + size * 4 bytes RGBA
  const rowLength = 1 + size * 4;
  const rawData = Buffer.alloc(rowLength * size);

  const cx = size / 2;
  const cy = size / 2;
  const radius = size * 0.36;
  const innerRadius = size * 0.18;

  for (let y = 0; y < size; y++) {
    const rowOffset = y * rowLength;
    rawData[rowOffset] = 0; // Filter type 0 (None)

    for (let x = 0; x < size; x++) {
      const pxOffset = rowOffset + 1 + x * 4;
      const dx = x - cx;
      const dy = y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Background rounded rectangle or circle
      let col = bg;

      // Draw stylized solar emblem
      if (dist <= innerRadius) {
        // Sun core (accent color)
        col = accent;
      } else if (dist <= radius) {
        // Solar rays / panel segments
        const angle = Math.atan2(dy, dx);
        const segment = Math.floor(((angle + Math.PI) / (2 * Math.PI)) * 12);
        const mod = ((angle + Math.PI) / (2 * Math.PI)) * 12 - segment;
        if (mod > 0.25 && mod < 0.75) {
          col = fg;
        } else {
          col = bg;
        }
      }

      rawData[pxOffset] = col[0];
      rawData[pxOffset + 1] = col[1];
      rawData[pxOffset + 2] = col[2];
      rawData[pxOffset + 3] = col[3];
    }
  }

  // Deflate bitmap data
  const compressed = zlib.deflateSync(rawData);

  // CRC32 helper
  const crcTable = [];
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    crcTable[n] = c;
  }

  function crc32(buf) {
    let crc = -1;
    for (let i = 0; i < buf.length; i++) {
      crc = (crc >>> 8) ^ crcTable[(crc ^ buf[i]) & 0xff];
    }
    return (crc ^ -1) >>> 0;
  }

  function makeChunk(type, data) {
    const typeBuf = Buffer.from(type, 'ascii');
    const lenBuf = Buffer.alloc(4);
    lenBuf.writeUInt32BE(data.length, 0);

    const toCrc = Buffer.concat([typeBuf, data]);
    const crcVal = crc32(toCrc);
    const crcBuf = Buffer.alloc(4);
    crcBuf.writeUInt32BE(crcVal, 0);

    return Buffer.concat([lenBuf, typeBuf, data, crcBuf]);
  }

  // PNG Signature
  const signature = Buffer.from([137, 80, 78, 79, 138, 26, 10, 135]);

  // IHDR Chunk
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(size, 0); // width
  ihdrData.writeUInt32BE(size, 4); // height
  ihdrData.writeUInt8(8, 8); // bit depth
  ihdrData.writeUInt8(6, 9); // color type (RGBA)
  ihdrData.writeUInt8(0, 10); // compression
  ihdrData.writeUInt8(0, 11); // filter
  ihdrData.writeUInt8(0, 12); // interlace

  const ihdrChunk = makeChunk('IHDR', ihdrData);
  const idatChunk = makeChunk('IDAT', compressed);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Write PNG files
fs.writeFileSync(path.join(publicDir, 'pwa-192x192.png'), createPNG(192, '#0B192C', '#FFFFFF'));
fs.writeFileSync(path.join(publicDir, 'pwa-512x512.png'), createPNG(512, '#0B192C', '#FFFFFF'));
fs.writeFileSync(path.join(publicDir, 'pwa-maskable-512x512.png'), createPNG(512, '#0B192C', '#FFFFFF'));
fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), createPNG(180, '#0B192C', '#FFFFFF'));
fs.writeFileSync(path.join(publicDir, 'favicon.ico'), createPNG(32, '#0B192C', '#FFFFFF'));

console.log('Icons generated successfully in /public');
