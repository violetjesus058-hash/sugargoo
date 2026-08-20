/**
 * Fix files that start with --- but have no closing ---
 * Remove the leading --- line from these files
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const BLOG_DIR = path.resolve(__dirname, '..', 'blog');

const brokenFiles = [
  'sugargoo-consolidation-guide.md',
  'sugargoo-dashboard-guide.md',
  'sugargoo-delivery-guide.md',
  'sugargoo-first-order.md',
  'sugargoo-getting-started.md',
  'sugargoo-how-to-buy.md',
  'sugargoo-how-to-order.md',
  'sugargoo-new-user-guide.md',
  'sugargoo-order-guide.md',
  'sugargoo-ordering-process.md',
  'sugargoo-payment-guide.md',
  'sugargoo-platform-guide.md',
  'sugargoo-purchase-guide.md',
  'sugargoo-registration-guide.md',
  'sugargoo-shipping-methods.md',
  'sugargoo-shipping-options.md',
  'sugargoo-shopping-guide.md',
  'sugargoo-top-up-guide.md',
  'sugargoo-warehouse-guide.md',
];

let fixed = 0;
for (const file of brokenFiles) {
  const filePath = path.join(BLOG_DIR, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Remove leading ---\n
  if (content.startsWith('---\n')) {
    content = content.substring(4); // remove '---\n'
    fs.writeFileSync(filePath, content, 'utf-8');
    fixed++;
    console.log(`Fixed: ${file}`);
  }
}

console.log(`\nFixed ${fixed} files`);
