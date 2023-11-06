# Todo List

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## App.jsx의 구조

- Header
- InputGroup
- CardGroup [반복]
  - Card [반복]

### Header 컴포넌트

- 해당 Todo List의 헤더

### InputGroup 컴포넌트

- 새로 추가할 Todo List의 제목, 내용, 추가하기 UI가 있는 컴포넌트

  #### ※ input을 컴포넌트로 분리하지 않은 이유

  - 해당 프로젝트에서 사용하는 input이 2개뿐이다.
  - <code>props</code> 를 전달한 컴포넌트가 하나 더 늘어나므로 컴포넌트로 분리하지 않았다.

### CardGroup 컴포넌트 [반복]

- Todo의 `완료 | 미완료`상태에 따라 Card 컴포넌트들을 구분하여 랜더링하는 컴포넌트

### Card 컴포넌트 [반복]

- Todo의 제목, 내용을 보여주는 컴포넌트
- 해당 Todo의 <code>isDone</code> 상태에 따라 버튼이 `취소 | 완료`로 변경

## 생각해보기

### JSX 문법이란?

- <code>JS</code> + <code>XML</code> 로 <code>JS</code> 파일에서 <code>HTML</code> 작성 가능
- <code>JSX</code>는 하나의 Element에 감싸진 구조
- <code>JS</code>의 값은 중괄호로 표시

### 어플리케이션의 상태를 관리하기 위해 사용한 리액트의 기능

- 해당 어플리케이션의 컴포넌트의 상태 값들을 관리하는 <code>useState</code> 사용
- 부모 컴포넌트에서 자식 컴포넌트로 상태 값들을 전달하기 위해 <code>props</code> 사용

### 어플리케이션의 컴포넌트 간 상태 값들의 공유 방법

- <code>props</code>를 사용하여 부모 컴포넌트에서 자식컴포넌트로 상태 값들을 공유하였다.

### 기능 구현을 위해 불변성 유지가 필요한 부분

- 리액트의 리랜더링을 위해 <code>useState</code>를 사용할 때, 해당 값을 변경하는 mutable 한 방법이 아닌, 새로운 객체를 생성하여 값을 변경하고, 그 객체를 state로 지정하는 immutable 한 방법이 필요하다.
- 해당 어플리케이션에서는 todoList와 title, content를 <code>useState</code>로 관리하고 있기 때문에 이러한 방법을 사용했다.

### 컴포넌트로 분리의 이점

- 반복되는 UI에 대해서 재사용이 가능하다.
