# Library Management System

## Schema Decisions

The Book model references Genre using a foreign key (`genreId`) instead of embedding genre information directly in the Book model.

This follows relational database design principles used in PostgreSQL. By storing genre information in a separate Genre table and referencing it from the Book table, the design avoids duplicate data, improves consistency, and makes maintenance easier.

For example, if a genre name changes, it only needs to be updated once in the Genre table rather than in every related Book record.
