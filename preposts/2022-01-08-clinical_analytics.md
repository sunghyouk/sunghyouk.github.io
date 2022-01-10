---
layout  : wiki
title   : "Introduction to SNOMED CT Chapter 8. Clinical analytics with SNOMED CT"
summary : "Chapter 8. Clinical analytics with SNOMED CT"
date    : 2022-01-08 17:36:53 +0900
updated : 2022-01-10 16:37:07 +0900
tag     : 
toc     : true
public  : true
parent  : [[2022-01-08-snomed]]
latex   : false
---

 ## 8.1 Introduction

*data rich but information poor*  
이것으로 끝나면 안된다. 어디서, 얼마나 정확히 SNOMED CT가 임상 분석 패러다임 내에 잘 맞는지 살펴 보자

## 8.2 Use of SNOMED CT in clinical data analytics

By *linking* clinical concepts of the data in records to guidelines and decision support rules, automation of these is made possible, while *mapping* to classification systems like ICD makes it possible to perform statistical and epidemiological analysis using those code systems.  

### 8.2.1 Point of care analytics

summarization and mapping of patient data and the linking of terminology with clinical knowledge artefacts. (Table 8.1)  

* historical summaries
  * 환자의 데이터가 여러 기관에 흩어져 있음
  * 같은 기관 내에서도 여러 장치와 소프트웨어 시스템에 흩어져 있음
* clinical decision support
  1) knowledge base
  2) infrence engine
  3) mechanism to communicate
* point of care reporting
  * reminders
  * identifying patients with care gaps and risk factors to alert ...과 같은 alarm service

### 8.2.2 Population-based analytics

1) accurate clinical data capture
2) integration of disparate clinical data sources
3) more meaningful and powerful queries

위와 같은 특성을 통해 전 인구에 이득이 될 수 있는 trend analysis, public health surveillance, pharmaco-vigilance, care-delivery audit과 healthcare service planning같은 역학적 연구에 사용될 수 있다. (Table 8.2)

* trend analysis
  * collecting information and attempting to spot a pattern
* pharmacovigilance
  * collection, detection, assessment, monitoring and prevention of adverse effects
* clinical audit
  * systemic review of care를 통해 patient care와 clinical outcome을 증진

### 8.2.3 Clinical research

(Table 8.3)

* identification of clinical research candidates
* predictive medicine
  * predicting the probability of disease and implementing measures to either prevent the disease altogether or significantly decrease its impact on the patient

### 8.2.4 Semantic search

natural language processing technique과 관련

## 8.3 SNOMED CT analytic techniques

extract-transform-load (ETL)

* attribute-based defining relationships
* ability to use description logic techniques

다양한 분석 기법을 이용해 일련의 순서를 보자면,

1) subset
2) subsumption
3) using defining relationships
4) description logic over terminology
5) description logic over terminology and structure
6) mapping

### 8.3.1 Subsets

extensional subsets: simple reference set with an ordered refser or annotation refset
intensional subsets: query specification set, intensional refsets

단일 혹은 조합해서 subset을 만드는 방법

1) manual inclusion
2) existing subset
3) lexical queries
4) hierarchical queries
5) attribute queries
6) SNOMED CT queries

### 8.3.2 Subsumption

Determining whether one concept (or expression) is a kind of another concept (or expression) is the fundamental capability enabled by SNOMED CT.  
subsumption testing을 통과해야 한다.

* using a stated or implied *is a* relationship
* using the SNOMED CT Expression Constraint Language using the `<` (**descendantOf**) or `<<` (**descendantOrSelfOf**) operators

### 8.3.3 Using defining relationships

SNOMED CT attributes are used to represent a characteristic of the meaning of a concept.  

### 8.3.4 Queries over defining relationships

### 8.3.5 Description logic over terminology

### 8.3.6 Description logic over terminology and structure

## 8.4 Case study summary

summary of a selection of the various case studies가 공식 문서에 포함되어 있으니 보시오.

### 8.4.1 Note

Table 8.5

## 8.5 Vendor solutions

기업이 제공하고 있는 solutions (Table 8.6)

## 8.6 Observations

EMR, EHR과 결합된 SNOMED CT를 이용해 많은 통계적 연구를 할 수 있다.

## 8.7 Final thoughts

Through the use of NLP in combination with SNOMED CT can be used to subsequently encode them.  
