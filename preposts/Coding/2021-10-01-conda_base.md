---
title: "기본적인 anaconda 사용법 (2)"
excerpt: conda로 환경 on-off 하기, anaconda 삭제하기

categories: Coding
tags: [Tips, Anaconda]

toc: true
toc_sticky: true

date: 2021-09-29
last_modified_at: 2021-12-10

---

## 1. 배경

mac의 경우 anaconda를 설치해서 사용하면 그냥 python3를 설치해서 쓰는 것보다 여러 의존적인 패키지를 버전에 맞춰 한꺼번에 사용할 수 있기에 anaconda를 설치하는 것을 여러 곳에서 권장하는 편이다.  

1. 터미널을 실행하면 `(base)`가 앞에 붙는 경우가 있는데, 이는 Anaconda의 가상 환경 중 base가 항상 터미널 시작 시 같이 실행되기 때문이다.  
   VS code로 R을 불러서 작업할 때가 있는데, R 터미널이 켜지면서 이미 R이 initialize 되었는데, conda의 activate 명령이 R에 씹혀서 같이 실행되어 error가 나는 것이 영 보기 싫었다.  
   사실 그냥 사용해도 문제는 없지만 error 자체가 기분 나쁘니까 python을 쓸 때만 `(base)`를 활성화 시키고 싶었다.

2. 설정이 꼬여서 anaconda를 삭제하고 재설치해야 할 경우도 있다.  
   2.의 경우를 너무 늦게 알았으면 어쩔 수 없다. 아마도 에러 메시지를 엄청나게 뿜어 대고 있을텐데, 스트레스 받지 말고 삭제 재설치를 하는 것이 나을 수도 있다.

## 2. 자동시작 on/off 방법

```zsh
# 자동 시작 끄기
conda config --set auto_activate_base False
source ~/.zshrc
```

2021년 10월 현재 Mac의 기본 셸은 zsh이므로 `~/.zshrc`를 새로 고침한다.
`bash`의 경우 `~/.bash_profile` 또는 `~/.bashrc`  

```zsh
# 자동 시작 켜기
conda config --set auto_activate_base True
source ~/.zshrc
```

`False`를 `True`로 바꾸면 off 상태가 on 상태로 바뀌면서 터미널 시작 시 마다 활성화 된다.  

이제 다시 현재 상태에서 가상 환경을 쓰고 싶다면

```zsh
conda activate base # 가상 환경의 이름
```

다시 끄고 싶다면,

```zsh
conda deactivate
```

## 3. Anaconda 삭제하기

anaconda의 공식 문서 참조 하기: <https://docs.anaconda.com/anaconda/install/uninstall/>  
stackoverflow의 게시물 참조: <https://stackoverflow.com/questions/42182706/how-to-uninstall-anaconda-completely-from-macos>  

mac의 경우 터미널을 열고 전체 Anaconda를 삭제하자.  
일단 anaconda-clean이라는 모듈을 설치하자. 삭제하는 데도 모듈을 설치하라니...  
Anaconda는 `anaconda3` 또는 `/opt`의 하위 디렉토리에 설치되어 있는 경우가 많다. 그러므로,

```zsh
conda install anaconda-clean

anaconda-clean --yes # 연관된 파일, 디렉토리를 하나씩 묻지 않고 삭제하기

rm -rf ~/opt

rm -rf ~/.anaconda_backup # anaconda-clean이 만들어 놓은 backup 디렉토리도 없애고 싶다면,

rm -rf ~/.conda ~/.continuum ~/.condarc # 설정 파일들이 들어 있는 디렉토리도 삭제
```

이렇게 디렉토리들을 다 지우고 나서 zsh에 `PATH` 설정해 놓은 것을 지우면 된다. 재설치는 설명 생략

## 3. 결론

`base` 환경에 뭘 함부로 깔지 말자. 아주 머리 아파진다.  
