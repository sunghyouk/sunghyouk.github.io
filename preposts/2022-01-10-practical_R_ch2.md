---
layout  : wiki
title   : "R을 이용한 데이터 처리 & 분석 실무 Chapter 2"
summary : "Chapter 2. 데이터 타입"
date    : 2022-01-10 17:00:29 +0900
updated : 2022-01-10 17:01:45 +0900
tag     : 
toc     : true
public  : true
parent  : [[2022-01-10-practical_R]]
latex   : false
---

## 03. 스칼라

- 숫자
- NA  
is.na(): NA 값이 저장되어 있는지를 판단

```R
is.na(
    x # R의 데이터 객체
)
```

- NULL  
변수가 초기화되지 않았을 때 사용

```R
is.null(
    x # R의 데이터 객체
)
```

NA: 결측치, 즉 값이 빠져 있는 경우를 뜻한다.  
NULL: 프로그램밍의 편의를 위해 undefined 값을 표현하는 데 사용하는 개념이다.

- 문자열  
- 진리값
`&&`, `||`의 의미: 요소 별 첫번째 진리값만 비교해서 출력함  
short-circuit: A && B 형태의 코드가 있을 때 A가 TRUE라면 B도 평가하지만, A가 FALSE라면 B를 평가하지 않는다.  

- 팩터
범주형 데이터를 표현하기 위한 데이터 타입 (factor 관련 함수)  
명목형과 순서형으로 구분  

factor(): factor 값을 생성  
nlevels(): 레벨의 개수를 반환  
levels(): 레벨의 목록을 반환  

is.factor(): 주어진 값이 팩터인지 판단  

ordered(): 순서형 팩터를 생성  
is.ordered(): 순서형 팩터인지를 판단

```R
sex <- factor("m", c("m", "f")) # sex에 m이 저장, 이 factor가 담을 수 있는 값의 레벨은 m, f
sex

nlevels(sex) # 레벨의 수
levels(sex) # 레벨의 목록

# factor의 변수에 level 값을 입력하여 직접 수정
levels(sex) <- c("male", "female")
```

## 04. 벡터

한 가지 스칼라 데이터 타입의 데이터를 저장할 수 있다.  

### 벡터 생성

c(): 주어진 값들을 모아 벡터를 생성  
names(): 객체의 이름을 반환하거나 할당  

나열하는 인자들은 벡터의 정의대로 한 가지 유형의 스칼라 타입이어야 한다.  

```R
x <- c(1, 3, 4)
names(x) <- c("kim", "seo", "park")
x
```

### 벡터 데이터 접근

length(): 객체 (factor, 배열, 리스트)의 길이를 반환  
NROW(): 벡터, 배열 또는 데이터프레임의 행 수를 반환  

*cf)* nrow()는 행렬만 가능  

```R
# 위 코드에 이어서
x["seo"]

# 부여한 이름만 보려면
names(x)[2]
```

## 05. 리스트

### 리스트 생성

list(): 리스트 객체를 생성

### 리스트 데이터 접근

```R
x$key
x[n]
x[[n]]
```

## 06. 행렬

### 행렬 생성

matrix(): 행렬을 생성

### 행렬 데이터 접근

```R
A[ridx, cidx]
```

### 행렬 연산

```R
A + x
A + B
A %*% B
```

이외에, 전치행렬 t(), 행렬 A와 행렬 x의 곱이 B일 때 x를 구하는, 즉, 역행렬을 구하는 solve()  
행렬의 차원은 nrow(), ncol()  
데이터의 차원을 벡터로 반환하는 dim()

## 07. 배열

array(): 배열의 생성
dim(): 데이터의 차원을 알 수 있다.

## 08. 데이터 프레임

data.frame(): 데이터 프레임 생성

### 데이터 프레임 접근

```R
d$colname
d[m, n, drop=TRUE]
```

### 유틸리티 함수

head(), tail(), View()

## 09. 타입 판별

class(): 객체의 클래스  
str(): 객체의 내부 구조  
is.typename(): 데이터 타입이 typename인가?  

## 10. 타입 변환

현재 사용하는 데이터가 올바른 데이터 타입인지 계속 확인  
as.typename(): 타입을 강제로 변환하고자 할 때, 하지만, 변환 이후 결과를 사용자가 통제하기 어렵다.  
반면, 데이터 생성 함수에 곧바로 다른 타입을 넘겨 형변환을 하면 사용자가 통제하기 쉽다.

```R
as.factor(c("m", "f"))

factor(c("m", "f"), levels=c("m", "f"))
```

