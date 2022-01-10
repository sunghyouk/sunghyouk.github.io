---
layout  : wiki
title   : "Introduction to SNOMED CT Chapter 5. Extending SNOMED CT"
summary : "Chapter 5. Extending SNOMED CT"
date    : 2022-01-08 17:28:40 +0900
updated : 2022-01-10 16:37:07 +0900
tag     : 
toc     : true
public  : true
parent  : [[2022-01-08-snomed]] 
latex   : false
---
 
## 요구 사항에 맞게 SNOMED CT와 LOINC, ICD ...과 통합하고 확장하는 방법

1. 하고자 하는 주제 영역에 맞게 `constrain` 하기
2. 다른 코드에 SNOMED CT 코드를 `map` 하기
3. 발견되었을 때 간극을 메울 `create new items` 하기
4. 선택한 언어로 `translate` 하기

## 5.1 Reference sets

줄여서 **Refsets**이라고 하는 것은 관심 영역으로 집중하여 방대한 SNOMED CT의 세계를 제한할 수 있도록 만든다.  
: 하위 집합, 선호 언어, 다른 코드 시스템에서 온 것들을 mapping한다.  

목적에 따라 여러 종류의 refset들이 있다.  
만들어진 refset은 조직 외부에서 사용할 시 SCTID를 생성하기 위해 *namespace*에 접근해야 하며 module ID concepts는 $\vert module\vert$ sub-hierarchy 밑에 더해진다.  
조직 내부에서만 사용할 때는 훨씬 자유롭다.  

하위 집합의 시작점을 정하는 것부터 일을 시작하는 것이 좋다.  

## 5.2 Mapping

목적과 용도에 따라 다른 시스템과 SNOMED CT를 연결하는 mapping  
예를 들어,  
SNOMED CT와 ICD의 연결  
SNOMED CT를 분류  
다른 코드 시스템을 SNOMED CT와 연결  
locally developed code system, locally collected clinical data as free text를 SNOMED CT와 연결이 가능하다.  

기본적으로 두 종류의 map이 있다:  

1. Simple map reference sets - 목표 체계와 SNOMED CT가 1:1 대응
2. Complex (and extended) map reference sets - 하나의 SNOMED CT concept에 다른 용어 체계의 여러 코드가 붙는 형태로, 그 코드는 단일 코드 시스템에서 온다.  
그러므로, SNOMED CT와 ICD 연결 또는 SNOMED CT와 LOINC의 연결 형태로 구성, ICD와 LOINC에 서로 속해있지 않아야 한다는 제한 조건이 추가되며, SNOMED CT - ICD - LOINC와 동시 연결은 안 된다.  

mapping이 문제 해결 과정인가? - `international release`에 이미 **ICD-9, ICD-10, LOINC**이 연결되어 있다.

## 5.3 Extensions

a set of terminology component and derivatives / that add to and are dependent on the SNOMED CT International Edition  
international edition만 사용 시 충족되지 않는 간극을 메우기 위해 사용  

always keep in mind, meaning of a SNOMED CT concept should never be changed to meet a local requirement  

must be `noted`, any person or organization that uses any extension at any time does so at entirely their own risk.  
