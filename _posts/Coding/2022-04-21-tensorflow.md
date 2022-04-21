---
title: "anaconda에서 tensorflow 용 가상 환경 만들고, tensorflow를 설치하고 필요한 모듈 설치하기"
excerpt: conda 가상 환경 만들고, tensorflow 설치하고 그 가상환경에서 필요한 모듈 설치까지 

categories: Coding
tags: [Tips, Anaconda, Tensorflow]

toc: true
toc_sticky: true

date: 2022-04-21
last_modified_at: 2022-04-21

---

## 1. 가상환경 만들기 - 시작은 아나콘다 공식 홈페이지에서

https://docs.anaconda.com/anaconda/user-guide/tasks/tensorflow/  

```bash
conda create -n tf tensorflow
conda activate tf
```

이렇게 하면 가상 환경 생성과 tensorflow 라이브러리가 같이 설치된다.  

## 2. 파이썬과 tensorflow의 버전 확인하기

```python
import tensorflow as tf
tf.__version__
exit()
```

## 3. 가상환경에서 같이 사용할 라이브러리 설치하기

```bash
conda install jupyter notebook
conda install numpy  # tensorflow와 같이 설치됨
conda install pandas
conda install seaborn
conda install matplotlib  # jupyter notebook 설치 시 같이 설치됨
conda install keras
conda install scikit-learn
conda install tqdm
```

잘 된다.  
