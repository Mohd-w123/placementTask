# Find the top N most frequently occurring words

This react app will ease your task of count the words and sort it according to the occurence of word !

# How it works ?

First of all we have fetch our string from the api request with the help of axios.

Now take the value of N from user !

Then after we have split the each word in string into the array, so that we perform our task. Now after splitting create an empty map so that we can store word as a key and occurence as value to the map..Now check if word is already present then increase the occurence otherwise add the word to the map ! After this process we will change map data to array {key:value} to [[key,value]] like that and then we will sort array on the basis of number of occurences and then after we will return the result acc to number which have passed by user !

I have used antd for UI purpose, so after getting result I have used antd table component and map the data into it. I have also used search functionality so that we can quickly find the word we want, and have used in Pagination in table so there is no limit on data !

# Screenshots for demo
[![image.png](https://i.postimg.cc/y6wgjgYZ/image.png)](https://postimg.cc/YjzCqSFr)

