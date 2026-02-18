import Database from "better-sqlite3";
import path from "path";
import fs from "fs";

const rawDbPath = process.env.DB_PATH;
const dbPath = rawDbPath && !rawDbPath.includes("/absolute/path/to/")
  ? rawDbPath
  : path.join(process.cwd(), "data", "diagnostic.db");
const dbDir = path.dirname(dbPath);

if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

const db = new Database(dbPath);

db.exec(`
  CREATE TABLE IF NOT EXISTS leads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    company TEXT,
    email TEXT,
    phone TEXT,
    message TEXT,
    source TEXT,
    created_at TEXT
  );
`);

const columns = db.prepare("PRAGMA table_info(leads)").all() as { name: string }[];
const hasPhone = columns.some((col) => col.name === "phone");
if (!hasPhone) {
  db.exec("ALTER TABLE leads ADD COLUMN phone TEXT");
}

export type LeadInput = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  message?: string;
  source?: string;
  createdAt?: string;
};

export function insertLead(input: LeadInput) {
  const stmt = db.prepare(
    "INSERT INTO leads (name, company, email, phone, message, source, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)"
  );
  stmt.run(
    input.name || "",
    input.company || "",
    input.email || "",
    input.phone || "",
    input.message || "",
    input.source || "diagnostic",
    input.createdAt || new Date().toISOString()
  );
}
