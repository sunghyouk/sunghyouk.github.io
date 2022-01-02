---
title:  "R을 이용한 데이터 처리 & 분석 실무 - 서민구 지음"
excerpt: "R 실용서를 보며 R 정리하기 - 1장 환경 준비하기"

categories: R

tags: [Programming, R]

date: 2021-10-10
last_modified_at: 2021-10-24

toc: true
toc_sticky: true

---

## 1장. R 프로그래밍을 위한 환경 준비하기

### 4. 도움말 보기

```R
help <or> ?
help(topic) # 도움말을 찾고자 하는 대상 

help.search <or> ??
help.search(pattern) # 찾고자 하는 문자열

example(topic, 함수명) # 예제를 실행하고자 하는 topic

help.start() # R 시스템 전반에 대한 도움말을 담고 있는 HTML 페이지
```

### 6. 배치 실행

R script를 사용해 코드를 .R 파일에 저장하고 배치로 실행하거나,  
source(): 파일 또는 url에서 입력을 받아 R script에서 불러 들여 실행함

```R
source(
    file # 파일명
)
```  

### 7. 패키지 사용하기

```R
install.packages(
    pkgs, # 설치할 패키지명
    dependencies # 동작하는 데 필요한 패키지 설치
)

update.packages(
    ask=TRUE
)

library(
    packages,
    help
)
```
