/*
  Warnings:

  - Changed the type of `item_type` on the `Favorite` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "ItemType" AS ENUM ('MOVIE', 'ANIME', 'SERIES', 'BOOK', 'MANGA');

-- AlterTable
ALTER TABLE "Favorite" DROP COLUMN "item_type",
ADD COLUMN     "item_type" "ItemType" NOT NULL;
