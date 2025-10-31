-- CreateTable
CREATE TABLE "file_uploader_users" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "file_uploader_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "file_uploader_folders" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "file_uploader_folders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "file_uploader_files" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "folderId" INTEGER NOT NULL,

    CONSTRAINT "file_uploader_files_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sid" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "file_uploader_users_username_key" ON "file_uploader_users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sid_key" ON "Session"("sid");

-- AddForeignKey
ALTER TABLE "file_uploader_folders" ADD CONSTRAINT "file_uploader_folders_userId_fkey" FOREIGN KEY ("userId") REFERENCES "file_uploader_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "file_uploader_files" ADD CONSTRAINT "file_uploader_files_folderId_fkey" FOREIGN KEY ("folderId") REFERENCES "file_uploader_folders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
