---
layout  : wiki
title   : "Introduction to SNOMED CT Chapter 1 ~ 3"
summary : "Chapter 1 ~ 3"
date    : 2022-01-08 17:25:12 +0900
updated : 2022-01-10 16:34:22 +0900
tag     : 
toc     : true
public  : true
parent  : [[2022-01-08-snomed]]
latex   : false
---

## Chapter 1. Overview of SNOMED CT

`SNOMED`는 acronym으로 **Systematized Nomenclature of Medicine**  
`CT`는 **Clinical Terms**의 acronym이다.

SNOMED CT는 `semantically interoperable` polyhierarchical subtype multi-lexical clinical terminology system이다. : 무슨 말인지 모르겠다.  

capable of multi-language support, 그 구조 - reference terminology - 는 'reference features'를 추가하며 논리 기반의 subsumption과 clinical terms의 추출을 허용한다. : 무슨 말인지 모르겠다.  

interface terminology이다. : healthcare IT 시스템의 UI에서 임상 데이터 입력과 게시에 대해 사용된다는 의미  

`semantic interoperability`는 개인의 전 생애 EHR의 creation과 maintenance에 필수적이다.  

How to use the EHR system that uses SNOMED CT, 모든 사용자는 어떻게 가장 '올바른' clinical term 또는 term을 찾을 수 있는가를 알 필요가 있다.  

## Chapter 2. Need for Clinical Terminology

### 2.1 Clinical summary

환자의 내원 - 주소 - 신체 검진, 진찰 - 혈액 검사 - 처방 - 향후 계획의 예시  
환자-의사의 관계 밖에 있는 누군가가 이 summary를 본다면 이로부터 발생하는 pertinent questions에 답할 수 있는가?  

### 2.2 Discussion

대충, healthcare에서 ICT의 역할은 새 기계를 사거나 진단 장비를 사는데 뒤쳐지고 있고,  
이로 인한 손해는 환자가 가장 크며, clinicians, insurer, 국가 모두 손해를 보고 있다는 내용

#### 2.2.1 Semantics et al

정보가 그 의미를 모호함이 없이 보유하도록 확신을 주는 것이 궁극적으로 중요하다.  
그러기 위해 구조적 본래의 상태 `integrity`를 보유할 뿐 아니라 항상 의미론 `semantics`을 유지하는 것도 중요하다.  

어떤 상태의 시점에 대한 문제 - 과거력인지 현재 진행 중인 상태인지  
`homonym` - 다른 상태, 해부학적 구조를 의미하는 유사한 단어  
`synonym` - 같은 상태와 구조를 의미하는 다른 단어  
`eponym` - 어떤 상태를 나타내는 사람의 이름  
`acronym` - 두문자  
`abbreviation` - 약자  

이들의 결과로, 관찰이 기록될 때 clinician이 실제로 의미하는 것이 무엇인지를 잡아내는 것은 상당한 도전 과제이다.  
이를 해결하기 위한 두 가지 접근 방법이 있다.  
한 가지는 _시작점이 단어 또는 용어인 lexicography_,  
다른 한 가지는 _시작점이 concept인 terminology_ 방법이 있을 수 있다.  

* 용어 기반의 접근법은 다양한 `homonym`을 처리할 수 있다. 예를 들어, cold는 감각으로 common cold는 질병으로 처리할 수 있다.  
* concept 기반의 접근법은 다양한 `synonym`을 처리할 수 있다. 예를 들어 같은 concept의 다른 표현인 myocardial infarction과 heart attack과 같은 것을 처리할 수 있다.  

#### 2.2.2 Some Word Defined

concept은 개념과 생각의 단위를 표현하며, object와 designation 사이에 연결을 형성한다.  
`designation` - sign에 의한 concept의 표현  
`term` - 특정 주제 영역에서 general concept의 verbal designation  

concept system은 의미론적 문맥에서 모르는 concept의 배치를 허용하여 다른 concept과 관계에서 특정 concept의 중요도나 강도의 개념을 이끌어 낸다.  
그러므로 concept system이 더 어울리고 강건하다 할 수 있다.  

가장 흔한 system은 `generic` (**is a**) relationship 혹은 `partitive` (**part of**) relationship에 기반한다.  

#### 2.2.3 Which controlled medical vocabulary?

controlled medical vocabulary가 21세기에 맞춰야할 요구 조건을 자세히 제시

#### 2.2.4 Insufficiency of broad-category code systems

의무 기록의 세 가지 기본적인 점

* 의무 기록은 개인 건강에 대한 key document이지만 이 가정은 점차 틀린 것 같다.
* 모든 의무 기록은 보험 영수증이나 다른 목적을 위한 통계 개발에 사용된다.
* 전체 정보 체계가 코드 의존적이다.

의료 기록 체계에서 네 가지 결함

* 의료 기록 체계가 정보의 왜곡을 만들 수 있다.
* 의료 기록 체계가 정확하고 자세한 진단을 포착 할 수 없다.
  * 이는 entity coding으로 수정될 수 있다.
  * 자세한 진단이나 clinical entities에 영구적인 코드를 포착하고 제공하는 적절한 front end를 가진 의료 기록 체계
* 의료 종사자들도 입력된 것의 의미를 정확히 알지 못한다.
* 단일 분류 체계는 모든 요구에 응할 수 없다.

cf) 통계 분석의 목적에 ICD와 LOINC은 이산적이고 상호 배타적인 군을 만들 수 있어 더 적합하다 할 수 있다 -- 하지만, 이는 의료 용어 체계의 본래 목적이 아니다.

기존의 용어 체계로 많은 것을 표현할 수 있지만, presenting complaint, past history, family history, examination finding은 코딩할 수 없다.  
**목적에 따라 코딩하기 위해 새 시스템을 고안해 내고, 새로 또 고안해 내는 일은 항상 있어 왔지만, 모든 연관된 사람과 언어에 관계 없이 쉽게 분석 가능한 단일 코딩 시스템이 필요하다.**

### 2.3 The solution

2015년, `SNOMED CT`가 이 해법으로 나왔다.

### 2.4 Benefits of SNOMED CT

#### 2.4.1 Patients and Clinicians

* 상담 중 **일관되고 공통된 표현**을 사용하여 임상 정보의 기록을 가능하게 한다.
* 공통된 방법으로 이해 가능하고 해석할 수 있는 의료 종사자들 사이에 적절한 정보 공유를 가능하게 한다.
* 언어의 장벽을 넘을 수 있다.

#### 2.4.2 Population

* emerming health issue, 임상 처치의 반응에 따른 변화의 인지와 population health monitoring의 조기 인식을 촉진시킴
* 임상 연구를 보조하기 위한 데이터 전달을 가능하게 함
* 지지하는 증거의 공급을 통해 치료 기술의 발전에 기여함
* 이상치와 예외를 조사하여 상세한 임상 기록 분석에 대한 선택으로 care-delivery의 수용 능력을 키움

#### 2.4.3 Enabling Rich Clinical Analysis

논리적 서술과 기계가 처리할 수 있는 코드를 통해 SNOMED CT는 자동화된 시스템을 사용해 쉽게 조직되고 해석되는 임상 기록으로 모든 곳에서 사용할 수 있다.

## Chapter 3. SNOMED CT History and IHTSDO

### 3.1 History and development

2002년, SNOMED와 Clinical Terms Version 3이 합쳐져서 최초로 배포되었다.
2007년, IHTSDO (International Health Terminology Standards Development Organization)이 SNOMED의 지적 재산권을 획득했다.

### 3.2 IHTSDO

2007년, 9개의 특허 권한을 가진 국가가 전적으로 코드 체계를 관리하고 있다.  
모든 회원국과 제휴 국가 내에서 사용은 무료지만, 비 회원국에 대해서 개별 특허가 필요하다.  
cf) 2020.8.14. SNOMED International 39번째 정식 회원국 가입  
국내 모든 의료기관 등은 SNOMED International로부터의 개별 가입 및 추가 비용을 지불하지 않고도 자유롭게 활용 가능  
from 한국보건의료정보원 <https://www.k-his.or.kr/menu.es?mid=a10203010000>  

IHTSDO 회원국만 국가별 언어와 방언으로 SNOMED CT를 번역하는 것이 가능하다. (2015년 이후 바뀌었을 수도 있다.)  
모든 회원국과 제휴 국가들은 `namespace identifier`를 할당 받는다.  
: This authorizes them to create and manage various concepts and reference sets that they choose to share outside their organization or region.  

IHTSDO는 General Assembly, Management Board, Member Forum 등등의 하위 기구를 가지고 있다.

### 3.3 National Release Cnetre

주 역할은 다음과 같다.

* IHTSDO와 연락점
* 회원국 간의 연락점
* SNOMED CT의 배포와 특허에 대한 필요한 과정을 수립 및유지
* terminology product의 배치
* 사용자로부터 feedback 촉진 등  

-- 이제 basics으로 넘어 가자 너무 지루하고 재미 없었다.  

