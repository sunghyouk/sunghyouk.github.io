---
layout  : wiki
title   : "머신러닝 교과서 Chapter 2.3"
summary : "Chapter 2.3 적응형 선형 뉴런과 학습의 수렴"
date    : 2022-01-10 17:31:09 +0900
updated : 2022-01-10 17:33:28 +0900
tag     : 
toc     : true
public  : true
parent  : [[2022-01-10-python_machine_learning]]
latex   : false
---
 
# ADAptive LInear NEuron, ADALINE

연속 함수로 비용 함수를 정의하고 최소화하는 핵심 개념
가중치를 업데이트하는 데 선형 활성화 함수 $\phi(z)$ 를 사용, 이는 항등 함수

$$\phi(w^T x)=w^T x$$

## 2.3.1 경사 하강법으로 비용 함수 최소화

종종 최소화하려는 비용 함수가 목적 함수

장점 1) 비용 함수가 미분 가능  
장점 2) 볼록 함수

경사 하강법 (gradient descent)을 적용  
모든 샘플을 기반으로 가중치 업데이트 - **배치 경사 하강법** (batch gradient descent)

## 2.3.2 파이썬으로 아달린 구현

AdalineGD class는 github/study_room/python_ML/adaline.py에 구현  
최적으로 수렴하는 좋은 학습률 $\eta$를 찾기 위해 여러 번 실험을 해야 함  
  * 퍼셉트론 하이퍼파라미터: 분류 모델이 최적의 성능을 내기 위해 다양한 하이퍼파라미터 값을 자동으로 찾는 방법: *to* Chapter 6

## 2.3.3 특성 스케일을 조정하여 경 하강법 결과 향상

특성 스케일을 조정 *to* Chapter 3, Chapter 4  
표준화: 평균이 0이고 단위 분산을 갖는 표준 정규 분포의 성질을 부여, 경사 하강법 학습이 좀 더 빠르게 수렴되도록 도움
  * 원본 데이터셋을 정규 분포로 만드는 것은 아님

## 2.3.4 대규모 머신 러닝과 확률적 경사 하강법

확률적 경사 하강법 (stochastic gradient descent) - 반복 또는 온라인 경사 하강법
  * 샘플에 대해 조금씩 가중치를 업데이트 - 가중치가 더 자주 업데이트되기 때문에 수렴 속도가 훨씬 빠름
  * 비선형 비용 함수를 다룰 때 얕은 지역 최소값을 더 쉽게 탈출할 수 있음 *to* Chapter 12
  * 훈련 샘플 순서를 무작위하게 주입
  * 순환되지 않도록 에포크마다 훈련 데이터셋을 섞는 것이 좋음
  * 새로운 훈련 데이터가 도착하는 대로 훈련

*reference)* 미니 배치 학습 (mini-batch learning): 훈련 데이터의 작은 일부분으로 배치 경사 하강법을 적용
  * 훈련 데이터의 작은 일부분으로 배치 경사 하강법을 적용
  * 가중치 업데이트가 더 자주 일어나므로 수렴 속도가 더 빠름
  * for 문에서 벡터화된 연산으로 바꾸어 주므로 학습 알고리즘의 계산 효율성이 크게 향상

AdalineSGD class는 github/study_room/python_ML/adalinesgd.py에 구현

