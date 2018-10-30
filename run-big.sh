hdfs dfs -rm -r output/big

$HD_STREAM -input 'input/big.txt' -output 'output/big' -mapper 'node map.js hope' -reducer 'node reduce.js' -file `pwd`/map.js -file `pwd`/reduce.js

hdfs dfs -cat output/big/*
