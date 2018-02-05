Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the lowest element (the value, not the index!).

(The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)

Example:

    { 6, 2, 1, 8, 10 } =&gt; 16
    { 1, 1, 11, 2, 3 } =&gt; 6
    `</pre>

    If array is empty, null or None, or if only 1 Element exists, return 0.

    **Note:** In C++ instead null an empty vector is used. In C there is no null. ;-)

    <pre>`<span class="hljs-comment">-- There's no null in Haskell, therefore Maybe [Int] is used. Nothing represents null.</span>

Have fun coding it and please don't forget to vote and rank this kata! :-) 

I have created other katas. Have a look if you like coding and challenges.

[solution](../solution/Sum\%20without\%20highest\%20and\%20lowest\%20number.js)