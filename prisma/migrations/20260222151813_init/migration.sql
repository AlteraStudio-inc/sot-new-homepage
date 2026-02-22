-- CreateTable
CREATE TABLE "Admin" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Menu" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "price" INTEGER NOT NULL,
    "duration_minutes" INTEGER NOT NULL,
    "target" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "order" INTEGER NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "Reservation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "is_first_time" BOOLEAN NOT NULL,
    "concern" TEXT,
    "menu_id" TEXT NOT NULL,
    "start_time" DATETIME NOT NULL,
    "end_time" DATETIME NOT NULL,
    "customer_name" TEXT NOT NULL,
    "customer_kana" TEXT NOT NULL,
    "customer_email" TEXT NOT NULL,
    "customer_phone" TEXT NOT NULL,
    "customer_line_id" TEXT,
    "customer_notes" TEXT,
    "admin_notes" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "Reservation_menu_id_fkey" FOREIGN KEY ("menu_id") REFERENCES "Menu" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "BusinessHour" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "day_of_week" INTEGER NOT NULL,
    "open_time" TEXT NOT NULL,
    "close_time" TEXT NOT NULL,
    "is_closed" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "Holiday" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" DATETIME NOT NULL,
    "is_full_day" BOOLEAN NOT NULL DEFAULT true,
    "start_time" TEXT,
    "end_time" TEXT,
    "reason" TEXT
);

-- CreateTable
CREATE TABLE "MessageTemplate" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "body" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Content" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT,
    "content" TEXT NOT NULL,
    "is_published" BOOLEAN NOT NULL DEFAULT true,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "MessageTemplate_type_key" ON "MessageTemplate"("type");

-- CreateIndex
CREATE UNIQUE INDEX "Content_slug_key" ON "Content"("slug");
