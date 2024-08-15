-- CreateTable
CREATE TABLE "Finished" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "item_id" INTEGER NOT NULL,
    "item_type" TEXT NOT NULL,

    CONSTRAINT "Finished_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Finished" ADD CONSTRAINT "Finished_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
