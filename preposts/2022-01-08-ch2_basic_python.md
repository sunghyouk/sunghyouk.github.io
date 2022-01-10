---
layout  : wiki
title   : "알고리즘 구현으로 배우는 선형대수 with 파이썬 Chapter 2. 파이썬 기초"
summary : "Chapter 2. 파이썬 기초"
date    : 2022-01-08 16:51:32 +0900
updated : 2022-01-10 16:13:26 +0900
tag     : 
toc     : true
public  : true
parent  : [[2022-01-08-linear_algebra_with_python]] 
latex   : false
---

## 2.1 기초 자료형

### 2.1.1 숫자

변수란 자료를 담을 수 있는 그릇, 상자, 혹은 방이라고 생각하면 편하다.

### 2.1.2 문자

문자형 변수는 문자형 데이터 값을 할당한 변수  

### 2.1.3 리스트

리스트에 포함하고 싶은 자료형을 대괄호로 묶어서 표현, 리스트의 각 원소는 쉼표를 기준으로 분리  
두 개의 리스트를 이어 붙이려면 `+` 연산자 사용 (덧셈 아님)  
리스트에 원소를 덧붙이려면 `append` 메소드 사용  
리스트의 가장 마지막 원소를 제거하려면 `pop` 메소드 사용  

### 2.1.4 bool

참, 거짓은 문자형 자료처럼 따옴표로 묶지 않고, 입력할 때 첫글자를 대문자로 입력해야 한다. (True, False)  

## 2.2 조건문

### 2.2.1 비교 연산자

등호, 부등호, 같지 않음

### 2.2.2 조건 판단 연산자

**and**: 두 조건 모두 참일 때 True 출력  
**or**: 두 조건 중 하나만 참이어도 True 출력  
**not**: 참, 거짓을 반대로 출력  
**in**: 해당 값이 리스트에 포함되는지 확인  
**not in**: 해당 값이 리스트에 포함되지 않는지 확인

### 2.2.3 if문

코드의 흐름을 제어 - 조건을 만족할 때만 특정 코드를 수행할 수 있게끔 프로그래밍할 수 있다.

*example* code

```python
a = [1, 2, 3, 4, 5]

if a[0] == 7:
    a.append(8)
elif a[0] == 1:
    a.append(10)
else:
    a.append(12)

print(a)
```

## 2.3 반복문

### 2.3.1 for문

range()로 범위를 지정할 수도 있고, 리스트에 포함된 원소를 차례로 출력할 수 있다.  
리스트 내에서 사용하면 다른 리스트를 생성할 수 있다.  

```python
b = [1, 2, 3, 4, 5]
c = [element * 2 for element in b]
print(c)
```

### 2.3.2 while문

while문은 사전에 작업 횟수를 정하지 않고 반복 작업할 조건을 입력, 조건을 만족하는 동안 계속 반복

## 2.4 함수

### 2.4.1 사용자 정의 함수

### 2.4.2 재귀 함수

recursive function: 함수의 정의 단계에서 자기 자신을 호출하는 함수  

*example* code를 보면 이해가 쉽다.  

```python
def one_to_sum(a):
    if a == 0:
        return 0
    res = a + one_to_sum(a-1)
    return res
```

함수 정의 단계에서 정의가 아직 끝나지 않은 함수를 사용

## 2.5 깊은 복사

### 2.5.1 mutable, immutable

```python
x = 3
y = x
```

이라고 할 때 id()함수 - 객체의 메모리 주소를 출력 - 로 확인해 보면 둘 모두 같은 메모리 상에 위치하고 있다.  
y에 새로운 숫자 값을 할당하여 다시 확인해 보면 메모리 주소가 다르다.  

리스트는 어떨까?  
리스트는 mutable한 객체이지만 리스트 내부 원소인 각 숫자는 immutable한 객체로 서로 다른 메모리 주소를 지닌다.  

리스트 원소의 값을 변경해 보자.  
리스트의 메모리 주소를 확인해 보면 원소의 변경 전과 동일,  
원소를 변경한 리스트의 원소의 주소는 기존 주소와 달리 변경된 것 확인.  

한 객체에 다른 객체를 담았을 때의 메모리 주소 변화를 보자.  
두 객체 모두 동일한 메모리 주소를 가진다.  
리스트 원소의 메모리 주소를 확인 - 이도 동일한 메모리 주소를 지님.  

한 리스트에만 새로운 값을 추가해 보자.  
두 리스트 모두 추가한 리스트 값이 표시된다.

### 2.5.2 얕은 복사