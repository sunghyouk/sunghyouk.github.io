---
title: "자동으로 시작되는 conda 환경 끄고/키기"
excerpt: conda로 환경 on-off 하기

categories: Coding
tags: [Tips, Anaconda]

toc: true
toc_sticky: true

date: 2021-09-29
last_modified_at: 2021-09-29

---

## 1. 배경

터미널을 실행하면 `(base)`가 앞에 붙는 경우가 있는데, 이는 Anaconda의 가상 환경 중 base가 항상 터미널 시작 시 같이 실행되기 때문이다.  
그냥 사용해도 무방하지만, VS code로 R을 불러서 작업할 때가 있는데,  
R이 켜지면서 conda의 activate 명령이 같이 실행되어 error가 나는 것이 영 보기 싫었다.  

사실 그냥 사용해도 문제는 없지만 error 자체가 기분 나쁘니까 python을 쓸 때만 initializing 시키고 싶었다.

## 2. 방법

```zsh
# 자동 시작 끄기
conda config --set auto_activate_base False
source ~/.zshrc
```

2021년 10월 현재 Mac의 기본 셸은 Z shell이므로 `zshrc`를 새로 고침한다.
`bash`의 경우 `~/.bashrc`  

```zsh
# 자동 시작 켜기
conda config --set auto_activate_base True
source ~/.zshrc
```

`False`를 `True`로 바꾸면 off 상태가 on 상태로 바뀌면서 터미널 시작 시 마다 initializing 된다.  

## 3. 결론

좀 귀찮아 지기는 하다만, VS code에서 R을 쓰는 데 몰입감이 생긴다.  
