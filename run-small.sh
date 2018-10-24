$HD_STREAM -input 'input/small.txt' -output 'output/small' -mapper 'node map.js hope' -reducer 'node reduce.js' -file `pwd`/map.js -file `pwd`/reduce.js

hdfs dfs -cat output/small/*
