---
title: "기본적이고 자주 사용 중인 conda command"
excerpt: conda command

categories: Coding
tags: [Tips, Anaconda]

toc: true
toc_sticky: true

date: 2021-10-15
last_modified_at: 2021-10-15

---

가상 환경 (virtual environment)은 어떤 작업 환경에서 다양한 패키지와 버전을 관리하기 위해  
큰 작업 환경 내에 또 다른 패키지와 버전을 들고 있는 작은 작업 환경으로 생각하면 좋을 듯 하다.

예를 들어, 내가 python 3.9.7을 받았다고 하자.  
하지만 내가 쓰고자 하는 패키지는 python을 3.9.2까지만 지원한다고 하자.  
그러려면 python을 downgrade하고 그 패키지에 맞춰 환경을 구성할 수 있지만, 매번 쓰고자 하는 패키지의 지원하는 python을 깔고 지우고 할 수 없는 노릇이다.  
또한, 만들고자 하는 완성품이 여기저기 다양한 컴퓨터 환경에서 실행된다고 생각해 보면, 그에 맞춰 모든 버전을 실험해 볼 수도 없는 노릇이다.  

이를 해결하기 위해 python 자체적으로 가상 환경을 지원하여 큰 환경 내에 작은 가상 환경을 만들어 그 버전에 맞는 python을 구성하는 것이 가능하다.  
하지만, 나는 주로 anaconda를 사용하므로, 이에 맞춰서 글을 써 보겠다.

## 1. 가상 환경의 리스트 보기

## 1.1 만들어 놓은 가상 환경 리스트 보기

```zsh
conda info --envs
```

### 1.2 가상 환경 활성화/비활성화

```zsh
conda activate <name-of-virtual-env>
conda deactivate
```

## 2. 가상 환경 생성하기

### 2.1 가상 환경 생성

```zsh
conda create -n <name-of-virtual-env> python=version
```

### 2.2 가상 환경 삭제

```zsh
conda remove -n <name-of-virtual-env> --all
```
