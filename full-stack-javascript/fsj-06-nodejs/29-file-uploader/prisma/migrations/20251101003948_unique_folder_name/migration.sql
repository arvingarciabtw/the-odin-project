/*
  Warnings:

  - A unique constraint covering the columns `[name,userId]` on the table `file_uploader_folders` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "file_uploader_folders_name_userId_key" ON "file_uploader_folders"("name", "userId");
