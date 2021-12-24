---
title: "Introduction to SNOMED CT - SNOMED CT expressions (chapter 7)"
excerpt: "SNOMED CT 기초에서 확장"

categories: SToM

tags: [SNOMED]

date: 2021-11-25
last_modified_at: 2021-11-25

toc: true
toc_sticky: true
---

## 7.1 Overview

`SNOMED CT expression`이란 임상 아이디어의 사례를 표현하기 위해 사용된 하나 이상의 concept identifier의 구조화된 조합이다.  
패스트푸드 점의 사례로 보자면, 미리 구성된 세트 메뉴는 `precoordinated expression` (간단히 주문, 계산원도 버튼 하나만으로 계산 가능), 단품을 조합해 세트 메뉴같이 만들어 먹는 것은 `postcoordinated expression` (일일이 주문, 계산원도 단품을 하나하나 버튼을 눌러서 계산)으로 볼 수 있다.  

attribute name: 반드시 **attribute** 유형을 지닌 concept이어야 한다.  
attribute value: name에 적합한 concept 또는 expression  
refinement는 상호 의존성을 표현하기 위해 group 될 수 있다.  

## 7.2 Expression parts

expression은 하나 이상의 `conceptID`와 선택적 refinement로 이루어져 있다. refinement는 name-value 쌍으로서 표현된 속성을 포함할 수 있고 독립적으로 또는 그룹의 일부로서 적용될 수 있다.  
`name` 부분은 이 속성에 의해 정제된 특성을 이름 짓는 concept을 참조하는 conceptID  
`value` 부분은 자체로서 precoordinated, postcoordinated expression이 올 수 있다.  

### 7.2.1 Expressions nesting

focus expression: 표현의 최고 수준 - 하나 이상의 focus concept, focus refinement로 이루어짐  
focus refinement에서 속성의 값은 nested expression이라고 하며 하나 이상의 nested refinement에 의해 선택적으로 정제된 value concept으로 이루어짐  

### 7.2.2 Expression nesting level

level 0 expression: focus expression
level 1 expression: nested expression

recursive pattern으로 계속 내려간다.

### 7.2.3 Providing context

*Fig 7.2)*문맥 (context)을 포함한 표현의 focus expression은 context wrapper이고 context refinement를 포함할 수 있다.  

## 7.3 Importance of contextual information

표현의 해석을 정제하고 변경하는 문맥 정보는 기록 내 주변 정보에 의해 추가될 수 있다.  
*Example)* 의무 기록 상 **surgical history of procedure**가 등장했을 때 이것이 예전에 이미 받은 것인지, 미래에 언제인가 받을 예정인지 아닌지, 얼마 전 과거에 받았는지 등이 어디에 그 기록이 있는지에 의존하여 다른 해석을 가질 수 있다.  

매우 기초적인 수준에서 표현은 concept 정의와 동등하다.  

## 7.4 Precoordinated expressions

단 하나의 concept identifier만 가지고 있는 표현이라 할 수 있다.  
임상 아이디어를 가장 잘 수행하는 한 용어를 선택한다.  
추천되는 형식은 concept_ID와 해당 용어를 같이 표시하는 것이다.  

사용자는 사용자가 표현하고자 하는 concept과 걸맞는 가장 적절한 용어를 찾아야 할 것이다.  
특징은 다음과 같다:  

* 주변 문맥 정보에 따라 다르게 해석될 수 있다.
* 한 concept을 참조하는 단일 identifier를 지닌다.
* 인간이 읽을 수 있는 용어를 담을 수 있다.
* 단일 SNOMED CT concept으로서 같은 의미를 표현한다.

## 7.5 Postcoordinated expressions

이 방법은 사용자가 완전히 만족할만한 특정 아이디어를 적절히 표현할 기 정의된 concepts가 없을 때 채용할 수 있다.  
coordinated by user post-release라서 postcoordinated expression이라 이름 붙였다.  

사용자의 필요에 가장 적절히 부합되는 SNOMED CT의 기능이라 할 수 있다.  

합성하는 방법은 아래와 같다:

* Refinement: concept의 속성 정의 값을 정제
* Qualification: 허용 가능한 값을 적용
* Combination: `focus concept`에 위의 과정을 통합

### 7.5.1 Refinement

*example 1)* **total knee replacement**를 **Kinemax total knee prosthesis** 이용해서 시행  
*example 2)* family history of hypertension  
precoordinated expression과 달리 concept_ID로만 표기하는 것이 더 낫다. (사람이 읽을 것이 아니라서)  

### 7.5.2 Qualification

속성에 허용된 값을 적용하는 것

*example 1)* periodic fever accompanied by chills  
**fever with chills**가 `primitive concept`이라 뒤에 이를 보충하는 **qualitifier* concept들이 필요하다.  
*example 2)* emergence laparoscopic gastrojejunostomy  
gastrojejunostomy가 `fully defined concept`이지만, priority, using access device의 *qualitifier* concept을 이용해서 새로 정의할 수 있다.  

### 7.5.3 Combination

위의 두 방법이 통하지 않을 때, **+ (AND is a)** 부호를 이용해 접붙이는 것으로 생각하면 된다.  
합쳐진 concept은 `focus concept`이어야만 하고 같은 최상위 수준의 위계에서 오거나 다른 조상의 같은 후손에서 와야 한다.  
이것으로 만들어진 것들은 대부분 애매하여 실전에서 사용하지 않는 것이 좋다.

### 7.5.4 Compositional grammar

의료정보학 전문가나 시스템 디자이너에게 필요한 이야기  
이 합성 문법은 하나 이상의 precoordinated를 합쳐 postcoordinated expression을 만들기 위한 문법이다.  

* **colon** 뒤에 refinement를 이용한 concept identifier가 올 수 있다.
* concept identifier는 하나 이상의 **속성 name-value 쌍**의 일련의 행으로 구성된다.
  * 속성 이름과 해당 속성 값은 **equal**로 분리된다.
  * 프로그래밍에서 속성 이름에 값을 할당한다고 볼 수 있다.
* 여러 개의 속성 이름 - 값 쌍이 있을 경우 각 쌍을 **comma**로 분리한다.
* 속성의 군집은 **curly braces**로 표시한다.
* 더 정제해야할 속성 값을 허용하는 nesting은 **round parenthesis**로 표현한다.
* 두 `focus concept`을 합하는 것은 **+ sign**을 쓴다.

### 7.5.5 Compositional grammar: ABNF syntax

보건 의료 정보학 전문가나 보건의료 IT 공학자에게 필요한 이야기  
SQL로 쓰여져 있다. 자세한 것은 2015년 7월 Normative specification 참조  

#### 7.5.5.1 Common close-to-user expression patterns

사용자에게 친숙한 패턴들이 제시

### 7.5.6 Postcoordination and concept model rules (*Fig 7.3*)

*Table 7.6*: 허용 가능한 값 (범위)에 대한 노트

#### 7.5.6.1 Discussion

어떻게 특정 신체 부위에서 특정 형태학적 이상을 가진 질환을 표현할 수 있는지 알아보면,  
적절한 속성 값이 있어야 postcoordination이 된다.

### 7.5.7 Representing postcoordinated expressions

세 가지 방법 정도가 있겠다.  

1. Augmented Backus-Naur Form (ABNF)
2. XML/JSON 형태
3. relational DBMS 형태

NLP algorithm이나, 사용자 인터페이스 등을 이용해 postcoordination을 할 수도 있다.  

## 7.6 Rules on entering qualifiers and other postcoordinated representations

속성은 그 속성에 대한 특정된 domain인 concept에만 적용되어야 하고, 그 속성에 대한 특정 범위에 제한되어 적용된 해당 값만을 가져야 한다. 이 규칙을 이해해야 효율적인 의미 기반 추출이 가능하다.  

### 7.6.1 Entering refinements to defining characteristics

defining characteristics 중 하나의 subtype을 선택함으로서 concept을 정제  
Concepts should *not* be refined if the resultant expression points to a new concept that is *not* a subtype of the parent concept. -- 무슨 말인지 모르겠다.  

* 대충 직역하면, 만약 결과 표현이 부모 concept의 subtype인 새 concept을 가르켜야만 정제를 해야한다. (정말 모르겠네)  

### 7.6.2 Entering concept model refinements

concept model에 의해 허용된 속성을 선택하고 그 속성에 적절한 값을 부여함으로서 concept의 의미를 정제  
속성은 subtype hierarchy에서 위치로 확인 가능  

### 7.6.3 Entry of unsanctioned qualifiers

승인되지 않은 qualifier의 입력 - 하지 마세요  

### 7.6.4 Constraints on the entry of refinements

* 앞에서 무슨 말인지 모르겠던 문장이 다시 나옴, 정제는 그것을 적용한 결과가 원 concept의 subtype으로 끝날 때 사용해야만 한다.  

배제되어야만 하는 부정의 의미 또는 확실성 또는 불확실성의 정도 또는 가족력으로 진단명을 사용, 계획되거나 요청된 무언가로 진단명을 사용하는 것은 피해야 한다.

### 7.6.5 Entry of concepts combinations

한 번에 합쳐서 battery 처방 처럼 표현해 버리고 싶겠지만, 해서는 안 된다.

## 7.7 Special note

불만족스럽다면 더 일반적인 concept으로 바라는 임상 아이디어를 free text로 쓸 수 있다.

## 7.8 Storing and retaining original expressions

여기서부터 주제들은 아직 정립되기 전이다.

## 7.9 Selective data retrieval through querying

querying에 의해서 일이 진행되는데, querying은 최상위 개념에서 아래쪽으로 탐색을 시작하거나 연관된 관계를 찾거나 이 둘이 결합되거나 할 수 있다.  

## 7.10 Impact on retrieval

### 7.10.1 Fully defined concepts

concept 정의는 완전하고, 필요하고 충분한 조건의 전체 집합을 표현하는 관계를 포함한다.  
세 가지 키워드로 나타내면:

* sufficiently defined concept definition status
* necessary and sufficient definition
* defined

### 7.10.2 Primitive concepts

concept 정의는 불완전하고, 필요한 조건의 집합을 표현하는 관계를 포함, 그러나 concept을 완전히 정의하기 충분하지 않음.  

* necessary but not sufficient concept definition status
* primitive

### 7.10.3 Discussion on concept conditions

* 모든 concept은 필요 조건의 집합을 갖고 있다.
* 모든 concept은 추가로 충분 조건의 집합을 갖고 있을 수 있다.
* concept의 충분 집합의 모든 원소가 참일 때, concept 역시 참임을 암시한다.
* 필요 조건 집합의 모든 원소는 충분 조건의 집합의 원소가 아닐 수 있다.

query expression을 predicate expression,  
record dataset expression을 candidate expression으로 부름  

candidate expression의 장점은 적절한 predicates의 더 넓은 집합에 의해 포함된다.  
predicate expression의 경우 필요 조건이 불완전한 추출일 때 단점이 될 수 있다.  
모든 충분 조건을 만족하는 candidate expression이 포함될 수 있다. 그러나 predicate에서 모든 필요 조건을 만족시킬 수 없으면 제외된다.  

## 7.11 Discussion on expressions query execution

`example` 모든 Laparoscopic procedure를 추출하고자 하는 경우  
단순히 subtype 계층을 찾아보는 것일 수도 있지만,  
concept의 정의를 찾는 것이 필요하고 동등한 expression과 비교 (concept이 fully defined되었는가 확인)  

postcoordinated expression으로 만들어 볼 수 있다. - focus concept과 attribute (값이나 subtype)로 구성  

### 7.11.1 Expression views

logical abstract model

### 7.11.2 Close-to-user expression view (stated)

primary stored and comminicated view of clinical information encoded

### 7.11.3 Inferred expression views

derived from a stated expression  
different logical transformations - to support accurate and complete information retrieval

### 7.11.4 Transformation between concept expressions and definitions

A definition can be transformed into an expression by making its subtype `is a` related concepts the focus of the expresion. (역도 성립)  
expression을 쓸 지 definition을 쓸 지 아래의 요인을 보고 결정:  

* stated definition은 항상 definition model을 따른다.
* stated expression은 항상 expression model을 따른다.
* 유추된 definition이나 expression은 필요한 함수에 대해 가장 적절한 모델에서 항상 표현된다.

## 7.12 Query testing

SNOMED CT가 사용되는 임상 문서에서, 데이터는 expression으로 저장된다.

## 7.13 Transforming expressions to normal forms

### 7.13.1 Normal form

무슨 말인지 전혀 모르겠다.

View that can be generated for any valid SNOMED CT expression by applying a set of logical transformation rules.  
: all conceptID are present and refer to `primitive` concepts only.  
every conceptID is replaced with its *normal form expression* that represents the definition of the referenced concept.  

Two distinct normal forms:

* long normal form is appropriate for candidate expressions
* short normal form is more appropriate for predicate expressions

#### 7.13.1.1 Long normal form

When applied to a candidate expression allows effective computation of whether it is subsumed by a predicate expression.  
When testing whether a candidate expression is subsumed by a predicate expression.  

#### 7.13.1.2 Short normal form

When applied to a predicate expression allows effective computation to determine whether a candidate expression is one of its subtypes.  
= proximal primitive supertype view  

#### 7.13.1.3 Examples

## 7.14 Canonical representation

long normal form composed according to the following sorting rules:

* no whitespace characters
* no pipe characters
* only permitted characters are:
  * digits - for conceptID
  * plus - `combine` focus concepts
  * colon - represent the start of a `refinement`
  * equals - link an attribute name to it `value`
  * comma - `separate` attributes within a refinement
  * round brackets - represent `nesting`
  * curly brackets - represent `grouping`

general order of elements within an expression:

* conceptID - sorted alphabetically
* attributes - sorted alphabetically
* groups - sorted alphabetically

## 7.15 Testing for subsumption/equivalence between expressions

### 7.15.1 Introduction

The main purpose for transforming expressions into their normal forms is to enable testing for equivalence or subsumption between different postcoordinated expressions.  

`example` match and pass the subsumption test  

### 7.15.2 Testing expression equivalence

1. transform both expressions to their long normal forms
2. render these normal forms
3. perform a simple string comparison between the two long normal forms in canonical presentation

### 7.15.3 Subsumption

subsumption: the premise of a syllogism that contains the minor term  

### 7.15.4 Testing expression subsumption

1. Transform the predicate expression to short normal form
2. Transform the candidate expression to long normal form
3. whether the predicate expression subsumes the candidate expression

precomputed transitive cluosure method가 유용하다.

## 7.16 Query language specification

*ref)* SNOMED CT Query Language Specification  

## 7.17 Concluding remarks

precoordinated expression이 더 선호된다.  
모든 precoordinated expression은 속성과 함께 concept에 대한 querying을 할 때 normal form으로 전환하여야 하는데, 동등성에 대한 시험이나 포합을 위한 시험을 통과해야 한다.  
query가 분명하고 자명하게 뽑히지 않을 수도 있어서 precoordinated expression이 시험을 통과해야 한다.
