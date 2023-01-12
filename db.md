collection:

# posts
1. id
2. title
3. slug
4. image
5. createdAt
6. status:
  1. approved
  2. rejected
  3. pending
7. content
8. hot (false or true) -> những bài viết nổi bật
9. userId
10. categoryId

# Category
1. id
2. title
3. slug
4. status:
  1. approved
  2. pendding
5. createdAt

# users
1. userId
2. fullname
3. email
4. password
5. avatar
6. status:
  1. active
  2. pedding
  3. baned
7. role:
  1. admin -> làm được tất cả
  2. mod -> vào được dashboard admin & thêm được bài viết
  3. user -> người vào xem bình thường
*8. permissions:
  'ADD_POST'
9. createdAt