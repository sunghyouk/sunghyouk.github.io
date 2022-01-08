---
title: "기본적인 anaconda 사용법 (1)"
excerpt: conda 가상 환경 만들고, 지우기

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

## 1. 가상 환경 만들기/복사하기/지우기

```zsh
conda info --envs # 가상 환경의 리스트 보기
conda search python # 설치 가능한 파이썬 버전 확인

conda create -n <new-virtual-env> python=<version>
```

`-n`은 `--name`과 같다.

### 1.1 새 환경에 들어가 보기

```zsh
conda activate <new-virtual-env> # 만들어 놓은 환경으로 들어가기
conda install <package-name> # 새 환경에서 패키지를 깔아 보기
conda list # 새 가상 환경에 설치되어 있는 패키지 확인하기
```

### 1.2 새 환경을 복사

```zsh
conda create -n <output-virtual-env> --clone <input-virtual-env>
```

### 1.3 가상 환경 삭제

```zsh
conda remove -n <virtual-evn> -all
```

## 2. 결론

이래도 저래도 꼬여서 base에 문제가 생긴다면, 삭제 후 재설치가 답일 수 있다.  
이에 대한 링크 참조: <https://sunghyouk.github.io/coding/conda_base/>  
