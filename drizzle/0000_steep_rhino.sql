CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"fullName" varchar(255) NOT NULL,
	"presence" varchar(255) NOT NULL,
	"transfer" varchar(255) NOT NULL,
	"agreement" varchar(255) NOT NULL,
	"music" varchar(255)
);
