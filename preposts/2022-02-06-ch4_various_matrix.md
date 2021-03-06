---
layout  : wiki
title   : "알고리즘 구현으로 배우는 선형대수 with 파이썬 Chapter 4."
summary : "Chapter 4. 다양한 행렬"
date    : 2022-02-06 08:59:02 +0900
updated : 2022-02-13 10:44:51 +0900
tag     : 
toc     : true
public  : true
parent  : [[2022-01-08-linear_algebra_with_python]]
latex   : false
---

## 4.1 전치 행렬

### 4.1.1 전치 행렬의 개념

전치 행렬의 크기는 기존 행렬의 행의 크기 및 열의 크기와 반대  

### 4.1.2 전치 행렬의 성질

### 4.1.3 파이썬 실습

```python
def transpose(A):
    """
    행렬의 전치 행렬
    입력값: 전치 행렬을 구하고자 하는 행렬 A
    출력값: 행렬 A의 전치 행렬 At
    """
    
    n = len(A)
    p = len(A[0])
    
    At = []
    for i in range(0, p):
        row = []
        for j in range(0, n):
            val = A[j][i]
            row.append(val)
        At.append(row)
    return At
```

### 4.1.4 넘파이 실습

`np.transpose()` 혹은  
`.T` 메서드  

## 4.2 대칭 행렬

### 4.2.1 대칭 행렬의 개념

**대칭 행렬**: 기존 행렬과 전치 행렬이 동일한 정사각 행렬, $A=A^T$

### 4.2.2 대칭 행렬의 성질

대칭 행렬 간 덧셈이나 뺄셈의 결과는 대칭 행렬  
대칭 행렬끼리 행렬 곱을 한 결과는 반드시 대칭 행렬은 아님  
행렬 A가 대칭 행렬일 때 대칭 행렬 A의 거듭 제곱 형태도 대칭 행렬  
어떤 행렬 A가 존재할 때 자기 자신의 전치 행렬을 곱한 결과는 대칭 행렬이 됨 (곱하는 순서를 바꾸어도 값은 다르지만 대칭 행렬)  

### 4.2.3 파이썬 실습

앞에서 구현한 NOTE: transpose(), matmul() 함수로 확인 가능

### 4.2.4 넘파이 실습

`np.transpose()`, `np.matmul()` 함수로 확인 가능

## 4.3 대각 행렬

### 4.3.1 대각 행렬의 개념

대각 행렬은 행렬의 주 대각 원소가 아닌 원소가 0인 정사각 행렬  
행 번호와 열 번호가 동일한 원소를 주 대각 원소라고 부름  

NOTE: GOTO Chapter 7. 역행렬  

대각 행렬의 역행렬: 주 대각 원소의 역수  
대각 행렬의 거듭 제곱: 대각 원소의 거듭 제곱  

### 4.3.2 대각 행렬의 성질

어떤 행렬에 대각 행렬을 곱할 때, 대각 행렬을 오른쪽에 곱하는 경우, 기존 행렬의 **열** 값이 대각 원소의 배수가 되며,  
대각 행렬을 왼쪽에 곱하는 경우 기존 행렬의 **행** 값이 대각 원소의 배수가 되는 것을 확인할 수 있음

### 4.3.3 파이썬 실습

#### 대각 행렬 구하기

대각 행렬을 구한다는 것은 대각 원소를 제외한 나머지 원소를 0으로 바꾸는 것을 의미  

```python
def diag(A):
    """
    행렬의 대각 행렬
    입력값: 대각 행렬을 구하고자 하는 행렬 A
    출력값: 행렬 A의 대각 행렬 D
    """
    
    n = len(A)
    D= []
    for i in range(0, n):
        row = []
        for j in range(0, n):
            if i==j:
                row.append(A[i][j])
            else:
                row.append(0)
        D.append(row)
    return D
```

#### 대각 원소 구하기

주어진 행렬의 대각 원소를 추출해 보기  
```python
def diag_ele(A):
    """
    대각 원소 구하기
    입력값: 대각 원소를 구하고자 하는 행렬 A
    출력값: 행렬 A의 대각 원소 리스트 d
    """
    
    n = len(A)
    d = []
    for i in range(0, n):
        d.append(A[i][i])
    return d
```

#### 대각 원소가 주어졌을 때, 대각 행렬로 변환

대각 원소가 주어졌을 때 대각 행렬을 만들 수 있는 함수 구현
```python
def ele2diag(a):
    """
    대각 원소 -> 대각 행렬 변환
    입력값: 대각 원소 리스트 a
    출력값: 대각 원소 a를 이용해 생성한 n*n 대각 행렬 D
    """
    
    n = len(a)
    D = []
    for i in range(0, n):
        row = []
        for j in range(0, n):
            if i==j:
                row.append(a[i])
            else:
                row.append(0)
        D.append(row)
    return D
```

#### 일반 행렬에 대각 행렬을 곱했을 때

### 4.3.4 넘파이 실습

`np.diag()`

## 4.4 단위 행렬

### 4.4.1 단위 행렬의 개념

단위 행렬: 주 대각 원소가 1이고 그 밖의 나머지 원소는 모두 0인 대각 행렬

### 4.4.2 단위 행렬의 성질

행렬 곱 위치와 상관없이 기존 행렬에 단위 행렬을 곱한 결과는 기존 행렬과 동일하다.
$$\mathbf{AI}=\mathbf{IA}=\mathbf{A}$$

### 4.4.3 파이썬 실습

단위 행렬을 생성하는 함수  
```python
def identify(n):
    """
    단위 행렬 생성
    입력값: 단위 행렬의 크기 n
    출력값: n*n 단위 행렬 I
    """
    
    I = []
    for i in range(0, n):
        row = []
        for j in range(0, n):
            if i==j:
                row.append(1)
            else:
                row.append(0)
        I.append(row)
    return I
```
### 4.4.4 넘파이 실습

`np.identity()`

## 4.5 영 행렬

### 4.5.1 영 행렬의 개념

행렬 구성 원솩 모두 0일 때 주로 $\mathbf{0}$으로 표시  

### 4.5.2 영 행렬의 성질

임의의 행렬에 영 행렬을 더하거나 뺀 결과는 기존 행렬과 동일  
기존 행렬에 영행렬을 곱하면 결과는 영 행렬이 됨  

### 4.5.3 파이썬 실습

n*p인 영 행렬을 만드는 함수 구현  
```python
def zero_mat(n, p):
    """
    영 행렬 생성
    입력값: 생성하고자 할 영 행렬의 크기 n행, p열
    출력값: n*p 영 행렬 Z
    """
    
    Z = []
    for i in range(0, n):
        row = []
        for j in range(0, p):
            row.append(0)
        Z.append(row)
    return Z
```

## 4.6 삼각 행렬

### 4.6.1 삼각 행렬의 개념

**상 삼각 행렬**: 주 대각 원소 아래쪽에 있는 모든 원소가 0인 정사각 행렬  
**하 삼각 행렬**: 주 대각 원소 위쪽에 있는 모든 원소가 0인 정사각 행렬

### 4.6.2 삼각 행렬의 성질

삼각 행렬 간 덧셈, 뺄셈, 행렬 곱의 결과는 삼각 행렬  
상 삼각 행렬의 전치 행렬은 하 삼각 행렬, 역도 성립  
삼각 행렬의 역행렬도 삼각 행렬

### 4.6.3 파이썬 실습

```python
def u_tri(A):
    """
    상 삼각 행렬 변환
    입력값: 상 삼각 행렬로 변환하고자 하는 행렬 A
    출력값: 행렬 A를 상 삼각 행렬로 변환시킨 행렬 utri
    """
    
    n = len(A)
    p = len(A[0])
    utri = []
    
    for i in range(0, n):
        row = []
        for j in range(0, p):
            if i>j:
                row.append(0)
            else:
                row.append(A[i][j])
        utri.append(row)
    return utri
```

```python
def l_tri(A):
    """
    하 삼각 행렬 변환
    입력값: 하 삼각 행렬로 변환하고자 하는 행렬 A
    출력값: 행렬 A를 하 삼각 행렬로 변환시킨 행렬 ltri
    """
    
    n = len(A)
    p = len(A[0])
    ltri = []
    
    for i in range(0, n):
        row = []
        for j in range(0, p):
            if i<j:
                row.append(0)
            else:
                row.append(A[i][j])
        ltri.append(row)
    return ltri
```

`np.triu()`: 상 삼각 행렬  
`np.tril()`: 하 삼각 행렬

## 4.7 토플리츠 행렬

### 4.7.1 토플리츠 행렬의 개념

1행의 원소가 오른쪽으로 한 칸씩 이동,  
가장 왼쪽 원소로 1행 원소에 속하지 않는 새로운 원소를 채움  
시계열 분석 시 자주 사용됨

### 4.7.2 파이썬 실습

```python
def toeplitz(a, b):
    """
    토플리츠 행렬 변환
    입력값: 토플리츠 행렬로 변환하고자 하는 리스트 a, b
    출력값: 리스트 a, b를 이용해 만든 토플리츠 행렬 A
    """
    
    n1 = len(a)
    n2 = len(b)
    A = []
    for i in range(0, n1):
        row = []
        for j in range(0, n2):
            if i>j:
                row.append(a[i-j])
            else:
                row.append(b[j-1])
        A.append(row)
    return A
```

### 4.7.3 scipy 실습

```python
from scipy.linalg import toeplitz
```
