DELETE FROM [dbo].[Customer]
DBCC CHECKIDENT ('Customer', RESEED, 0);
INSERT INTO [dbo].[Customer] ([FirstName], [LastName], [SSN]) VALUES (N'Chris', N'Cusack', N'111-222-333')
INSERT INTO [dbo].[Customer] ([FirstName], [LastName], [SSN]) VALUES (N'Jennifer', N'Cusack', N'222-333-444')
INSERT INTO [dbo].[Customer] ([FirstName], [LastName], [SSN]) VALUES (N'Alex', N'Noseworthy', N'123-123-123')
INSERT INTO [dbo].[Customer] ([FirstName], [LastName], [SSN]) VALUES (N'Wallace', N'Girvan', N'444-333-111')
INSERT INTO [dbo].[Customer] ([FirstName], [LastName], [SSN]) VALUES (N'Cathy', N'Pierce', N'555-444-555')
INSERT INTO [dbo].[Customer] ([FirstName], [LastName], [SSN]) VALUES (N'Caitlyn', N'Cull', N'233-443-222')
INSERT INTO [dbo].[Customer] ([FirstName], [LastName], [SSN]) VALUES (N'Lenny', N'Go', N'555-333-444')
INSERT INTO [dbo].[Customer] ([FirstName], [LastName], [SSN]) VALUES (N'Jill', N'Smith', N'234-678-543')
SELECT * FROM [dbo].[Customer]