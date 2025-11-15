-- CreateTable
CREATE TABLE "messaging_app"."users" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "messaging_app"."chats" (
    "id" SERIAL NOT NULL,
    "first_user_id" INTEGER NOT NULL,
    "second_user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "chats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "messaging_app"."messages" (
    "id" SERIAL NOT NULL,
    "chat_id" INTEGER NOT NULL,
    "sent_by_id" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "sent_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "messages_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "messaging_app"."users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "chats_first_user_id_second_user_id_key" ON "messaging_app"."chats"("first_user_id", "second_user_id");

-- CreateIndex
CREATE INDEX "messages_chat_id_sent_at_idx" ON "messaging_app"."messages"("chat_id", "sent_at");

-- AddForeignKey
ALTER TABLE "messaging_app"."chats" ADD CONSTRAINT "chats_first_user_id_fkey" FOREIGN KEY ("first_user_id") REFERENCES "messaging_app"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messaging_app"."chats" ADD CONSTRAINT "chats_second_user_id_fkey" FOREIGN KEY ("second_user_id") REFERENCES "messaging_app"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messaging_app"."messages" ADD CONSTRAINT "messages_chat_id_fkey" FOREIGN KEY ("chat_id") REFERENCES "messaging_app"."chats"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messaging_app"."messages" ADD CONSTRAINT "messages_sent_by_id_fkey" FOREIGN KEY ("sent_by_id") REFERENCES "messaging_app"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
