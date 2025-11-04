-- CreateTable
CREATE TABLE "blog_api"."blog_api_users" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "blog_api_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "blog_api"."blog_api_posts" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "postedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "blog_api_posts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "blog_api"."blog_api_comments" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "postId" INTEGER NOT NULL,
    "commentText" TEXT NOT NULL,
    "commentedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "blog_api_comments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "blog_api_users_username_key" ON "blog_api"."blog_api_users"("username");

-- AddForeignKey
ALTER TABLE "blog_api"."blog_api_posts" ADD CONSTRAINT "blog_api_posts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "blog_api"."blog_api_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blog_api"."blog_api_comments" ADD CONSTRAINT "blog_api_comments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "blog_api"."blog_api_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blog_api"."blog_api_comments" ADD CONSTRAINT "blog_api_comments_postId_fkey" FOREIGN KEY ("postId") REFERENCES "blog_api"."blog_api_posts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
