[![npm](https://img.shields.io/npm/l/react-image-picker.svg)](http://opensource.org/licenses/MIT)

# React SSR with Java

This is a simple project that implements React Server Side Rendering with Java and Spring Boot. It uses Nashorn Javascript Engine that part of Java 8. 

## Framework & Libraries
- [Java 8 (JDK 8u131)](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
- [Spring](https://spring.io/)
- [Gradle](https://gradle.org/)
- [React](https://facebook.github.io/react/)
- [React Router 4](https://reacttraining.com/react-router/web/guides/philosophy)

## Installation

I have just tried using gradle. So the task I have designed must been bad.
 
Go to directory "react-ssr-with-java", then execute this script: 
```
./gradlew build && java -jar server/build/libs/gs-spring-boot-0.1.0.jar 
```