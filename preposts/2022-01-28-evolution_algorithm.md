---
layout  : wiki
title   : "Grokking AI Algorithm Chapter 4"
summary : "Chapter 4. Evolution algorithm"
date    : 2022-01-28 23:07:42 +0900
updated : 2022-02-05 21:57:55 +0900
tag     : 
toc     : true
public  : true
parent  : [[2022-01-07-Grokking_AI_algorithm]]
latex   : false
---

# Chapter 4. Evolution algorithm

## 진화란 무엇인가?

생물학적 진화를 통해 배운 것들로 다양한 솔루션을 생성하고 여러 세대에 걸쳐 성능이 더 좋은 솔루션으로 수렴하도록 함으로서 실제 문제에 대한 최적 솔루션을 찾는 데 활용한다.  
단독으로 사용할 수도 있지만 신경망 같이 다른 구조와 함께 사용하는 경우도 많다.  

## 진화 알고리즘을 적용할 수 있는 문제

솔루션이 다수의 순열이나 선택으로 구성된 최적화 문제를 해결하는 데 강력  
**배낭 문제 knapsack problem**: 배낭에는 특정한 최대 무게까지 항목을 담을 수 있다. 목표는 배낭에 넣은 항목의 총 무게가 배낭의 한계 용량을 초과하지 않으면서 항목의 총 가치가 최대가 되도록 선택한 항목을 배낭에 넣는 것이다.  
모든 항목의 조합을 무차별적으로 대입하는 것의 계산 비용이 너무 비싸지므로 바람직한 솔루션을 구하기 위한 효율적인 알고리즘을 찾아야 한다.  

*Ex)* 물류 회사가 목적지에 따라 트럭 포장 작업을 최적화하는 경우,  
또한, 해당 물류 회사가 여러 목적지 사이 최단 경로를 찾으려는 경우  
공장에서 컨베이어 벨트 시스템을 통해 개개 항목을 원료로 정제할 때 개개 항목의 정제 순서가 생산성에 영향을 준다면 그 순서를 결정하는데 유전 알고리즘이 유용  

## 유전 알고리즘 (genetic algorithm): 수명 주기

진화 알고리즘 계열에 속하는 알고리즘으로 라이프 사이클 중 일부를 조금씩 조정해서 다양한 문제를 해결  
좋은 솔루션을 찾기 위해 유전자로 표현된 유전체의 큰 검색 공간을 탐색한다.  
하지만, 유전 알고리즘이 항상 최적 솔루션을 보장하지는 **않는다**. 다만, 지역적으로 최고의 솔루션이 아니라 **전역적으로 최고의 솔루션**을 찾으려고 시도한다.  

*Ref)* 전역 최고는 탐색 가능한 최적 솔루션, 지역 최고는 덜 최적화된 솔루션  

처음에는 잠재적 솔루션의 개별 유전적 속성이 크게 달라야 하는데, 만약 초기에 속성 간 차이가 없으면 지역 최고 솔루션에 갇힐 위험이 증가한다.  

일반적인 수명 주기:  
* 모집단 생성
* 모집단 내 개체의 적합도 측정 - 특정 솔루션이 얼마나 좋은지 판단
* 적합도에 따른 부모 선택 - 자손을 낳을 부모 쌍을 선택
* 부모로부터 개체 재생산 - 유전 정보를 혼합, 자손에 약간의 돌연변이를 적용
* 다음 세대 채우기

## 1) 솔루션 공간 인코딩

인코딩 단계를 올바르게 수행하는 것이 가장 중요, 가능한 상태의 표현을 신중하게 설계  
상태는 문제의 가능한 솔루션을 나타내는 특정 규칙이 있는 데이터 구조, 상태 집단은 모집단을 형성  

이진 인코딩에서 제외한 항목과 포함한 항목을 각각 0, 1로 나타낸다.  

### 이진 인코딩: 0과 1로 가능성 있는 솔루션 표현

염색체는 이진 비트 문자열로 표시  
기본 연산자를 사용하기 때문에 일반적으로 성능이 더 우수하다. 필요한 작업 메모리가 줄어들고, 사용하는 언어에 따라 이진 연산의 계산 속도가 더 빠르다.  

## 3) 솔루션 모집단 생성

2) 알고리즘 파라미터 설정은 나중에 다시 본다.  
첫 번째 단계는 당면한 문제에 대한 임의의 잠재적 솔루션을 초기화  
제약 조건을 통해서 잠재적 솔루션이 유효하도록 한다 - 즉, 제약 조건을 위반하면 나쁜 적합도 점수를 할당  

## 4) 모집단 내 개체 적합도 측정

적합도 함수는 유전 알고리즘의 수명 주기에 매우 중요하다.  
적합도 계산과 제약 조건 확인은 관심사를 더욱 명확하게 구분하기 위해 분리한다.  

## 5) 적합도에 따른 부모 선택

일부 개체는 전체 그룹에서 적자가 아니더라도 번식할 가능성이 높으며, 전체적으로 강하지는 않지만 강한 특성을 갖고 있다.  
각 개체의 적합도를 계산해서 새로운 개체의 부모가 될 **확률**을 결정한다.  
**룰렛 휠 선택**은 적합도에 따라 부모를 선택하는 데 사용하는 인기 있는 기술  
선택한 부모의 수는 필요한 총 자손의 수에 따라 결정, 부모를 달리 선택해 가면서 (동일한 개체가 한 번 이상 부모가 될 가능성이 있음) 반복, 유전자가 혼합된 하나 혹은 두개의 자손을 생산  

모집단 모델은 모집단의 다양성을 통제하는 방법 - 정상 상태 모델/세대 기반 모델  

### 정상 상태: 세대마다 일부 모집단 교체

선택 전략을 사용하는 방법으로 소수의 약한 개체는 제거하고 이를 새로운 자손으로 대체하는 것

### 세대 기반: 세대마다 전체 모집단 교체

인구 규모와 동일한 수의 자손 개체를 생성하고 전체 모집단을 새로운 자손으로 대체한다.

### 룰렛 휠: 부모와 생존 개체 선택

적합도 점수가 높은 염색체에는 휠의 더 큰 슬라이스를 할당하고, 적합도 점수가 낮은 염색체에는 작은 슬라이스를 할당 - 확률적 선택의 예  
각 개체의 선택 확률은 각 개체의 적합도를 모집단의 총 적합도로 나누어 계산  
'휠'을 원하는 수의 개체를 선택할 때까지 '회전'  
각 선택에 대해 0과 1 사이의 임의의 수를 계산 - 개체의 적합도가 그 확률 내에 있으면 해당 개체를 선택  

## 6) 부모로부터 개체 복제

교차: 두 개체 사이에 유전자를 혼합하여 하나 이상의 자손 개체를 생성  
돌연변이: 모집단의 다양성을 강화하기 위해 자손 개체를 약간 변경, 지역 최고 솔루션에 갇히는 것을 방지하는 데 매우 중요  

### 단일 점 교차: 각 부모로부터 한 부분씩 상속받기

염색체 구조의 한 지점을 선택한 다음, 부의 첫번째 부분과 모의 두번째 부분을 사용, 결합하여 새로운 자손을 생산  
두번째 자손은 부의 두번째 부분과 모의 첫번째 부분을 사용하여 만든다.  

### 양 점 교차: 각 부모로부터 여러 부분 상속 받기

염색체 구조의 두 지점을 선택한 다음, 부모를 번갈아 참조하여 해당 부분을 선택하여 하나의 자손을 만듦  

### 균일 교차: 각 부모로부터 많은 부분 상속받기

무작위로 생성되는 마스크를 이용하여 어떤 유전자를 사용할 지 결정하여 첫 번째 자손을 생성  
일반적으로 자손의 속성을 부모와 매우 다르게 만듦  

### 이진 인코딩을 위한 비트 문자열 돌연변이

무작위로 선택한 이진 인코딩된 염색체의 유전자를 다른 유효한 값으로 변경 (NOTE: 돌연변이 메커니즘 주제 - 5장)  

### 이진 인코딩을 위한 비트 반전 돌연변이

이진 인코딩 염색체의 모든 유전자를 반대 값으로 반전한다. 솔루션의 성능을 크게 저하시킬 수 있으며, 모집단에 지속해서 다양성을 도입해야 할 때 사용  

## 다음 세대 채우기

모집단의 크기는 고정, 번식을 통해 새로운 개체가 유입 - 죽어서 모집단에서 제거해야 한다.  

### 탐험과 활용

초기에는 검색 공간에서 매우 다른 잠재적 솔루션을 찾는다.  
가장 바람직한 솔루션을 찾기 위해 더 강력한 지역 솔루션 공간을 활용한다.  

현재 세대에서 솔루션의 성능을 측정 - 당면한 문제를 얼마나 잘 해결할 수 있는가?  

### 중지 조건

알고리즘이 영원히 실행되는 것 방지하기 위해 **중지 조건**을 설정: 알고리즘이 끝나는 곳에서 충족하는 조건  
가장 강한 개체를 최적 솔루션으로 선택  

가장 간단한 중지 조건은 알고리즘을 실행할 세대 수를 나타내는 상수 값, 특정 적합도에 도달하면 중단  
**정체**: 여러 세대에 걸쳐 유사한 정도의 솔루션을 산출 - 적합도의 변화가 거의 없으면 알고리즘을 중단하도록 선택 가능  

## 유전 알고리즘 매개변수 설정

고려할 점: 문제에 대한 좋은 솔루션을 잘 찾는 것, 그리고 계산 관점에서 효율적으로 수행하는 것  

* 염색체 인코딩 - 알고리즘 성공의 핵심
* 모집단 크기 - 더 작은 모집단으로 시작해서 크기를 키워라
* 모집단 초기화
* 자손의 수 - 다양한 자손을 모두 수용하려고 하다가 좋은 솔루션을 놓칠 위험이 있다.
* 부모 선택 방법
* 교차 방법 - 인코딩 방법과 연관
* 돌연변이 비율 - 초기 세대에서는 더 많은 다양성 - 후기 세대로 갈수록 세대에서는 다양성이 줄어들도록 비율을 변경할 수 있다.
* 세대 선택 방법
* 중지 조건 - 계산 복잡성과 시간은 중지 조건의 주요 관심사

## 진화 알고리즘 사용 사례

* 주식 시장에서 투자자 행동 예측 - 매수/보유/매도할지를 매일 결정 - 투자자 포트폴리오의 결과로 나타남
* 머신러닝의 특징 선택 - 여러 특징이 주어졌을 때 가장 중요한 분리된 특징을 찾아낼 수 있음 (NOTE: GOTO Chapter 8)
* 암호 해독 및 암호
