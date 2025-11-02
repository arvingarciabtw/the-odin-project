/*
  Warnings:

  - Added the required column `supabasePath` to the `file_uploader_files` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "file_uploader_files" ADD COLUMN     "mimeType" TEXT,
ADD COLUMN     "supabasePath" TEXT NOT NULL;
