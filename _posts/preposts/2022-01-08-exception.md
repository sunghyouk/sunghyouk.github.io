---
layout  : wiki
title   : 혼자 공부하는 파이썬 Chapter 6. 예외 처리 
summary : Chapter 6. 예외 처리
date    : 2022-01-08 17:05:39 +0900
updated : 2022-01-08 17:08:12 +0900
tag     : 
toc     : true
public  : true
parent  : [[2022-01-08-python_self_study]] 
latex   : false
---
 
## 06. 예외 처리

### 06-1. 구문 오류와 예외

#### 오류의 종류

##### 구문 오류

괄호의 개수, 들여쓰기 문제 등으로 인해 프로그램이 **실행되기도 전에** 발생하는 오류

##### 예외

예외 또는 런타임 오류는 **실행 중에** 발생하는 오류

#### 기본 예외 처리

조건문을 사용 (: **기본 예외 처리**) 혹은 `try` 구문을 사용  

##### 조건문으로 예외 처리하기

조건으로 구분해서 해당 상황일 때 다른 처리를 하도록 설정  
프로그램을 작성할 때는 항상 예외적인 상황까지 모두 생각하는 습관을 들이기

#### try except (+ else) 구문

> `try`:  
> 예외가 발생할 가능성이 있는 코드  
>
> `except`:  
> 예외가 발생했을 때 실행할 코드  
>
>>`pass` keyword  
> 이유는 정확히 모르지만, 어떤 부분에서 예외가 발생하는 것 같다. - 예외 없이 통과  
>
> `else`:  
> 예외가 발생하지 않았을 때 실행할 코드  
>
> `finally`:  
> 무조건 실행할 코드

`else` 구문 없이 `try`에 모두 넣고 처리해도 괜찮음 - 사실 안 써도 괜찮음  

#### finally 구문

예외 처리 구문의 규칙:

1) `try` 구문은 단독으로 사용할 수 없으며, 반드시 `except` 또는 `finally`와 함께 사용  
2) `else` 구문은 반드시 `except` 뒤에 사용  

##### try 구문 내부에서 return 키워드를 사용하는 경우

`finally` 구문은 반복문 또는 함수 내부에 있을 때 위력을 발휘  
`try` 구문 중간에서 탈출해도 `finally` 구문은 무조건 실행  
`try` 구문에서 원할 때 `return` 키워드로 빠져나가도 파일이 무조건 닫히게 되어 깔끔한 코드가 된다.  
특히, `finally`에 `close()` 함수를 호출하도록 코드를 작성하면 깔끔해진다.

##### 반복문과 함께 사용하는 경우

`break`로 빠져나갈 때도 사용할 수 있음  

### 06-2. 예외 고급

#### 예외 객체

모든 예외의 어머니: `Exception`  

#### 예외 구분하기

파이썬은 `except` 구문 뒤에 예외의 종류를 입력해서 예외를 구분할 수 있음  

Example  
> except ValueError:
> except IndexError:

`as` 키워드: 예외를 구분할 때 각각의 `except` 구문 뒤에 예외 객체를 붙여 활용

> except ValueError as exception:
> except IndexError as exception:

예기치 못한 예외 발생을 염두에 두고 마지막에 `Exception`을 넣어서 프로그램이 죽지 않게 만들기

> except Exception as exception:

이 모든 것을 한 번에 볼 수 있는 코드 뭉치  

```python
# 변수를 선언합니다.
list_number = [52, 273, 32, 72, 100]

# try except 구문으로 예외를 처리합니다.
try:
    # 숫자를 입력 받습니다.
    number_input = int(input("정수 입력> "))
    # 리스트의 요소를 출력합니다.
    print("{}번째 요소: {}".format(number_input, list_number[number_input]))
    예외.발생해주세요()
except ValueError as exception:
    # ValueError가 발생하는 경우
    print("정수를 입력해 주세요!")
    print(type(exception), exception)
except IndexError as exception:
    # IndexError가 발생하는 경우
    print("리스트의 인덱스를 벗어났어요!")
    print(type(exception), exception)
except Exception as exception:
    # 이외의 예외가 발생한 경우
    print("미리 파악하지 못한 예외가 발생했습니다.")
    print(type(exception), exception)
```  

#### Raise 구문

확실하게 예외를 유발시키는 구문  

> `raise` 예외 객체

* 아직 구현하지 않은 부분이니까 확실하게 문제가 생기게 만들자
* 이 부분을 그냥 넘어가면 나중에 큰 문제가 발생하니까 여기에서 강제 종료시키자

