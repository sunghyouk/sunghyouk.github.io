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

문맥을 포함한 표현의 focus expression은 context wrapper이고 context refinement를 포함할 수 있다.  
