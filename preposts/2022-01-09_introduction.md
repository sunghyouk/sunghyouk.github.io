---
layout  : wiki
title   : "Statistics and machine learning methods for EHR data Chapter 1. Introduction"
summary : "Chapter 1. Introduction"
date    : 2022-01-09 09:20:22 +0900
updated : 2022-01-16 23:18:36 +0900
tag     : 
toc     : true
public  : true
parent  : [[2022-01-09-EHR_data]]
latex   : false
---

## Chapter 1. Introduction: Use of EHR data for scientific discoveries - challenges and opportunities

### 1.1 Real-world data and real-world evidence: Big data in practice

EMR/EHR data can complement data from well-designed experiments and RCTs, which are considered as the gold standard in clinical research and evidence-based medicine.  
The well-designed experiments and RCTs also have some limitations.  
First, `generalizability` of the designed experiments and RCTs:

1) the inclusion/exclusion criteria may be too restrictive;
2) the environment of designed experiments and RCTs may be different from the real-world situation;
3) significant differences in charactersitics from those in a general population;
4) the sample size is limited in a specific population.  

In addition, the conclusion from RCTs is usually based on the `population mean effect`.  
Moreover, the RCTs are often `expensive` with a high cost in labor and time.  

It is necessary to use the data from observational studies and real-world data to provide complementary evidence for clinical decisions.  

Real-world data often have the features of "Big data" - volume, variety, velocity, and veracity.  
We expect that the real-world data could produce a big value.  

We focus on EHR data.  
This book will include data extraction, cleaning, pre-processing, preparation, analysis, and modeling.  
This book was based from the Cerner Health Facts database.  

### 1.2 Use of EMR/EHR database for research and scientific discoveries: procedure and life cycle

EHRs are much broader than EMRs and contain all relevant health data of patients in addition to EMRs, which may include the data from laboratories, specialists, nursing homes, and other healthcare providers.  

Summary of the procedure  

1. Initiate a project: proposing a research topic
2. Data queries and extraction
3. Data cleaning
4. Data pre-processing
5. Data preparation
6. Data analysis, modeling and prediction
7. Result validation
8. Result interpretation
9. Publication

#### 1.2.1 Initiate a project

One should start by proposing a research direction or topic, usually with a focus on a particular disease, treatment, medication, or other conditions of interest.  
What is good question?  

* Clinically or scientifically important and high-impact
* Appropriate to use the available EHR data to address
* Appropriate and reliable endpoint or outcome data are available or can be derived from the EHR database for the proposed question or hypothesis.
* The sample size is big enough.

The types of observational studies include

1) case study or case report, which is a good source to generate hypothesis;
2) cross-sectional study, which are used to define incidence, prevalence and associated risk factors, but it is difficult to identify causal-effect relationships;
3) case-control study can be used to compare the effectiveness of exposures, treatment and preventive/intervention strategies;
4) cohort study - prospective and retrospective with longitudinal data collected over a period of time - can provide some evidence on the causal-effect relationships;
5) real-world data can be used to formulate the four types of studies mentioned above based on data.

그럼에도 불구하고, Treatment evaluation or group comparisons may not be easy to address using the retrospective EHR data.  
A data extraction summary statistics report (GOTO: Chapter 3.)

#### 1.2.2 Data queries and data extraction

structured relational database into the OMOP Common Data Model:  
to transform the data from different databases into a common format (data model) and a common representation (terminologies, vocabularies, coding schemes, etc.)  

One key principle for data extraction is to extract all the relevant data and `not drop` any data before exploring the data carefully.  
The data of any variables in the EHR database may contain errors.  

EHR phenotyping approaches (GOTO: Chapter 3.)
Phenotyping may need to be performed after data cleaning

#### 1.2.3 Data cleaning

data processing, pre-processing 그리고 data preparation과 구분된다.  
Data cleaning should be done for the whole EHR database since this is needed for all the projects and all the data analyses.  

#### 1.2.4 Data pre-processing or processing

process the data, summarize the data or extract useful features from the data in order to analyze the data or fit a statistical model to the data.  
The data pre-processing or processing is *project-specific*.  

#### 1.2.5 Data preparation

Data preparation is purpose-driven.  
project-specific data cleaning for data preparation.
It is very important to document or label the latest version of the prepared data.  
It is recommended to perform Steps 3-5 carefully and patiently.  

#### 1.2.6 Data analysis, modeling and prediction

1) It is challenging to select a statistical model or method for a particular scientific question.  
2) There are many data analysis issues that we need to address for high-dimensional confounding factors.

Prediction - we need to clearly define the time interval of the historical data (observation window) and the prediction window.  
observation window 내에서 예측하는 것: estimation  
If we are trying to estimate a state or a quantity at the last time point of the historical data, we can call it "filtering", which means to filter out the observational noise.  

#### 1.2.7 Result validation

It is necessary to validate the results via both internal and external data sources.  
internal validation - using cross-validations  
external validation - using different data sources

#### 1.2.8 Result interpretation

#### 1.2.9 Publication and dissemination

It is important to consider all steps in a systematic way.

### 1.3 Challenges and opportunities

1) It is not easy to acquire or access a complete and general EHR database for research purposes.
2) Since the EHR data were not collected for research or scientific discovery purpose, the data collection may have a bias toward its original purpose of EHR systems.
3) methodological perspective
  * It is difficult to confirm a patient with a particular disease diagnosis or characteristics.
  * The high missing rate of many variables and factors in the EHR database

하지만, challenge만 있는 것은 아니다.  
the retrospective data analysis based on the EHR database reflects more real-world conditions, which can be used to generate many good hypotheses for future randomized trials.  

