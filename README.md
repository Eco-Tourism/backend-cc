# auth-eco
Belum di deploy
buat db dulu di local
test postman
public
http://localhost:8080/api/test/all

*register*
http://localhost:8080/api/auth/signup
req body
{
    "username":"test",
    "email": "test@gmail.com",
    "namalengkap": "testtheo",
    "alamat": "testalamattheo",
    "kontak": "test",
    "jeniskelamin": "L",
    "hobi": "testing",
    "password": "test"
}

*login*
http://localhost:8080/api/auth/signin
req body
{
    "username":"test",
    "password": "test"
}

*users*
http://localhost:8080/api/test/user
header
token dari login
x-access-token;eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjg2NTEyNDk1LCJleHAiOjE2ODY1OTg4OTV9.vt1fNAZpUVJpgkFKf9v3jEPVaKewBcnzLmVFCeqyZ2s

