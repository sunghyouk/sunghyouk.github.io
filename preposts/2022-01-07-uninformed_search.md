---
layout  : wiki
title   : "Grokking artificial intelligence algorithm Chapter 2. 검색의 기초"
summary : "검색의 기초"
date    : 2022-01-07 23:02:08 +0900
updated : 2022-01-10 16:12:12 +0900
tag     : #계획 #검색 #계산비용 #그래프 #자료구조 #정보없는검색 #너비우선검색 #깊이우선탐색 
toc     : true
public  : true
parent  : [[2022-01-07-Grokking_AI_algorithm]]
latex   : false
---

## 계획 및 검색이란?

계획 (planning)은 목표 달성과 관련한 작업을 수행할 때 최적의 결과를 얻기 위해 서로 다른 맥락과 세부 수준에서 이루어진다.  
환경이 변함에 따라 목표를 약간 변경할 수 있으며, 그러한 목표에 도달하기 위한 경로를 불가피하게 조정해야 한다.  
계획의 조정은 거의 예측할 수 없으며, 필요에 따라 조정해야 한다.

검색 (searching)은 단계적으로 계획을 세우는 것을 안내해 주는 방법이다.  
검색은 목표 달성을 위한 미래 상태 평가를 포함한다.  

검색은 문제 해결에 필요한 지능형 알고리즘을 개발하기 위한 오래되고 강력한 도구다.  

## 계산 비용: 스마트한 알고리즘이 필요한 이유

`빅 오 표기법` (Big O notation) - 함수나 알고리즘의 복잡도를 설명하기 위해 사용  
입력 크기가 커짐에 따라 필요한 연산 횟수를 모델링

* 단일 연산: $O(1)$
* 목록에 있는 항목들을 출력하는 함수: $O(n)$
* 한 목록의 각 항목과 다른 목록의 각 항목을 비교하는 함수: $O(n^2)$

입력 크기가 증가해도 연산 횟수가 제한적으로 늘어나거나 일정한 알고리즘이 좋다.  
알고리즘마다 계산 비용이 다르다.

## 검색 알고리즘을 적용할 수 있는 문제

일련의 의사 결정이 필요한 거의 모든 문제는 검색 알고리즘으로 해결할 수 있다. 문제와 검색 공간의 크기에 따라 이를 해결하기 위해 다양한 알고리즘을 사용할 수 있다.  
좋은 솔루션을 찾을 수 있지만 그것이 반드시 최적의 솔루션이라고 할 수는 없다.  

## 상태 표현: 문제 공간과 솔루션 표현을 위한 프레임워크 생성

컴퓨터에게 논리적으로 인코딩 (부호화)이 필요하다.  

데이터는 가공되지 않은 어떤 사실, 정보는 특정 도메인에서 데이터에 대한 통찰력을 제공하는 해당 사실의 해석이다.  
정보는 의미를 제공하기 위한 맥락과 데이터의 처리가 필요하다.  

자료구조 (data structure)는 알고리즘이 효율적으로 처리할 수 있도록 데이터를 표현하는 데 사용하는 컴퓨터 과학 분야의 개념이다.  

## 그래프: 검색 문제와 솔루션 표현

그래프는 연결 관계를 갖는 몇몇 상태를 포함하는 자료구조다. 그래프의 각 상태는 노드라고 하고, 두 상태 간 연결은 에지라고 한다.  
각 에지의 가중치는 여행한 거리를 나타낸다.  

## 그래프의 자료구조 표현

그래프를 노드 간 관계를 나타내는 배열의 배열로 나타낼 수 있다.  
그래프에서는 노드의 인접성이 중요하다. 인접 노드 (adjacent node)는 다른 노드에 직접 연결된 노드다.
다른 방식으로 표현하는 방법으로 근접 행렬, 인접 행렬, 인접 리스트가 있다.  

## 트리: 검색 솔루션 표현에 적합한 자료구조

트리는 값이나 객체의 계층 구조를 나타내는 데 많이 사용하는 자료구조다. 계층은 하나의 객체와 그와 관련한 몇몇 객체를 그 객체 아래에 위치하도록 배치하는 것이다.  
`연결된 비순환 그래프` (connected acyclic graph)  
경로는 직접 연결되어 있지 않은 노드를 연결하는 일련의 노드와 에지를 말한다.  

## 정보 없는 검색: 맹목적으로 솔루션 찾기

정보 없는 검색, 가이드 없는 검색, 맹목적 검색, 무차별 대입 검색이라고도 한다.  
일반적으로 트리로 표현, 문제 도메인에 대한 추가적인 정보가 없다.  

너비 우선 탐색: 특정 깊이에서 모든 선택 가능한 탐색을 한 후에 트리의 더 깊은 선택지를 탐색  
깊이 우선 탐색: 출발점으로부터 특정 경로의 가장 깊은 지점에 있는 목표를 찾을 때까지 탐색  

가정: 플레이어는 이전에 방문했던 블록으로 이동할 수 없음 - 순환을 방지  

## 너비 우선 검색: 깊게 보기 전에 넓게 보기

트리를 이동하거나 생성하는 데 사용하는 알고리즘  
`선입선출` first-in first out, FIFO 방식의 큐를 사용하여 가장 효율적으로 구현  

알고리즘은 미로에서 플레이어의 현재 위치를 파악, 선택 가능한 모든 이동 방향에 대해서 평가, 목표 지점에 도달할 때까지 선택한 각각의 이동에 대해서 이 논리를 반복  

경로는 목표 지점에 도달하기 위한 일련의 이동으로 구성된다. 목표 지점에 도달하기 위한 거리로, `비용`이라고도 한다.  
목표 지점에 도착한 첫번째 경로를 솔루션으로 반환한다. 추가적인 정보가 없기 때문에 해당 최적 경로를 찾는 것을 보장할 수는 없다.  

*conference)* 다수의 솔루션을 찾을 수 있도록 만드는 것이 가능하지만, 비용이 너무 많이 들기 때문에 하나의 목표 지점을 찾는 것이 낫다.  

## 깊이 우선 탐색: 넓게 보기 전에 깊게 보기

특정 노드에서 시작하여 첫 번째 자식 노드에 연결된 경로를 검색, 그 노드의 첫 번째 자식 노드의 경로를 검색하는 방식  
가장 먼 리프 노드에 도달할 때까지 반복해서 검색을 수행  
이미 방문한 리프 노드의 부모 노드를 역추적해서 다시 검색  

`후입선출` last in first out, LIFO 방식의 스택 특성으로 역추적하기 전에 모든 노드를 리프 노드 깊이까지 처리  
노드를 스택에 추가 push - 객체를 스택에 추가,  
제거 pop - 스택에서 최상위 객체를 제거  

자식 노드의 순서가 상당히 중요하다. 순서가 바뀌면 솔루션도 달라진다.

## 정보 없는 검색 알고리즘 사용 사례

* 네트워크에서 노드 간 경로 찾기
* 웹 페이지 크롤링 - 크롤러, 메타 데이터 구조, 콘텐츠 간 관계를 생성
* 소셜 네트워크 연결 찾기

## 선택 사항: 그래프 유형에 대한 추가 정보

* 무향 그래프 undirected graph - 에지에 방향이 없고, 두 노드 간 관계는 상호적
* 유향 그래프 directed graph - 에지에 방향이 있고, 두 노드 간 관계는 명시적
* 연결이 끊긴 그래프 disconnected graph - 하나 이상의 노드가 에지로 연결되어 있지 않다.
* 비순환 그래프 acyclic graph
* 완전 그래프 complete graph - 모든 노드는 에지를 통해 다른 모든 노드와 연결
* 완전 이분 그래프 complete bipartite graph - 한 파티션의 모든 노드는 다른 파티션의 모든 노드와 연결된다.
* 가중 그래프 weighted graph - 노드 간 에지에 가중치가 있는 그래프다.

*reference to* Chapter 6, chapter 8.  

## 선택 사항: 다양한 그래프 표현 방법

### 근접 행렬

incidence matrix: 높이가 그래프의 노드 개수, 너비가 에지 개수인 행렬  
유향 그래프의 경우 노드가 특정 에지를 통해 수신 노드로 연결되면 -1,  
나가는 노드로 연결, 무향 그래프로 연결된 경우 1

### 인접 리스트

adjacency list: 초기 리스트의 크기가 그래프의 노드 수,  
각 값이 특정 노드에 연결된 노드를 나타내는 연결 리스트를 사용  
 