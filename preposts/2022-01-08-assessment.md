---
layout  : wiki
title   : "Introduction to SNOMED CT Chapter 11. Overall assessment"
summary : "Chapter 11. Overall assessment"
date    : 2022-01-08 17:42:09 +0900
updated : 2022-01-10 16:37:07 +0900
tag     : 
toc     : true
public  : true
parent  : [[2022-01-08-snomed]]
latex   : false
---

## 11.1 Domains covered by SNOMED CT

SNOMED CT has terms for almost all clinical data items that are recorded in any clinical document.

## 11.2 Compliance to Cimono's Desiderata

Cimono의 처음 구상에 개발하면서 implementable, globally applicable but locally extensible, multilingual solution의 특성이 추가되었다.  
즉, understandable, reproducible and usable이라는 세가지 criteria가 추가되었다.

## 11.3 Stakeholder SNOMED CT impact analysis

### 11.3.1 Clinicians

의사들은 더 이상 새 시스템을 익히고 사용하느라 공부할 필요가 없다. SNOMED CT는 직관적이라 쓰기 쉽고 다른 사람이 남긴 기록을 해석하기도 쉽다. 또한, 어떠한 의무기록의 양식과도 잘 맞는다.  

### 11.3.2 Public health officials

이전보다 기민하게 바뀌는 경향성, 예측 분석이 가능하여 공중 보건의 감시를 더 수월하게 할 수 있다.

### 11.3.3 System designers (functional architects)

가능한 자세히 알고자 하는 사람들이다. - 사용자 인터페이스 디자인, 인터페이스 용어 매핑, refset 집약, 정보 모델 고안 등등을 상의해가면서 만들어야 한다.

### 11.3.4 Clinical analysts

자신감을 갖자 이득이 된다.

## 11.4 Final word

SNOMED CT consists of `clinical concepts` that are linked to terms and are logically interrelated. Each concept maps to many synonymous terms, and every concept, term and relationship is associated with a `unique identifier` on its own that is not related to the item it identifies in any way.
