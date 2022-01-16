---
layout  : wiki
title   : "R을 이용한 데이터 처리 & 분석 실무 Chapter 4"
summary : "Chapter 4. 데이터 조작 I: 벡터 기반 처리와 외부 데이터 처리"
date    : 2022-01-15 22:12:04 +0900
updated : 2022-01-15 22:34:01 +0900
tag     : 
toc     : true
public  : true
parent  : 
latex   : false
---

# Chapter 4. 데이터 조작 I: 벡터 기반 처리와 외부 데이터 처리 

## 01. 아이리스 데이터

기본 예제 데이터

```R
data(iris) # 데이터를 사용할 때: data(데이터셋 이름)
head(iris)
str(iris)

iris3 # 3차원 배열 형태로 저장되어 있음

library(help=datasets) # 기본 데이터 목록
```

더 다양한 데이터:  
1) mlbench 패키지
2) http://archive.ics.uci.edu/ml/

## 02. 파일 입출력

CSV -> 데이터 프레임, 데이터 프레임 -> CSV  
R 객체를 바이너리 형태로 파일에 저장했다가 불러들이는 방법  

### CSV 파일 입출력


