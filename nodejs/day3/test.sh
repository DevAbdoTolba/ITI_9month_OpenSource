#!/bin/bash


echo "1. GET ALL"
if ! curl -s -o /dev/null http://localhost:3000/posts; then
    echo "ERROR in GET ALL"
fi

echo "2. POST NEW"
curl -X POST -H "Content-Type: application/json" -d '{"title":"Valid Title", "content":"This content is long enough", "tags":["tech"]}' http://localhost:3000/posts
echo -e "\n"

read MY_ID

echo "3. GET BY ID ($MY_ID)"
if ! curl -s -o /dev/null http://localhost:3000/posts/$MY_ID; then
    echo "ERROR in GET BY ID"
fi

echo "4. PUT UPDATE ($MY_ID)"
if ! curl -s -o /dev/null -X PUT -H "Content-Type: application/json" -d '{"title":"Updated Title", "tags":["modified"]}' http://localhost:3000/posts/$MY_ID; then
    echo "ERROR in PUT UPDATE"
fi

echo "5. POST ANOTHER"
curl -X POST -H "Content-Type: application/json" -d '{"title":"Second Post", "content":"More long content for testing", "author":"LazyDev"}' http://localhost:3000/posts
echo -e "\n"

read

echo "6. DELETE ($MY_ID)"
if ! curl -s -o /dev/null -X DELETE http://localhost:3000/posts/$MY_ID; then
    echo "ERROR in DELETE"
fi


# ------

echo "7. GET FAIL (Wrong ID)"
curl -s http://localhost:3000/posts/6980bad12042edd8409d3647
echo -e "\n"

echo "8. POST FAIL (Short Title)"
curl -s -X POST -H "Content-Type: application/json" -d '{"title":"No", "content":"Short"}' http://localhost:3000/posts
echo -e "\n"

echo "9. POST FAIL (Missing Data)"
curl -s -X POST -H "Content-Type: application/json" -d '{"author":"Me"}' http://localhost:3000/posts
echo -e "\n"

echo "10. PUT FAIL (ID not found)"
curl -s -X PUT -H "Content-Type: application/json" -d '{"title":"Ghost"}' http://localhost:3000/posts/6980adca33542e0095c76f99
echo -e "\n"

echo "11. DELETE FAIL (ID not found)"
curl -s -X DELETE http://localhost:3000/posts/6980adca33542e0095c76f99
echo -e "\n"


echo "13. 404 MIDDLEWARE"
curl -s http://localhost:3000/rani-mode-activated
echo -e "\n"