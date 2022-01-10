---
layout  : wiki
title   : "Statistics and machine learning methods for EHR data Chapter 1. Introduction"
summary : "Chapter 1. Introduction"
date    : 2022-01-09 09:20:22 +0900
updated : 2022-01-10 06:58:21 +0900
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
A data extraction summary statistics report (--> Chapter 3.)

#### 1.2.2 Data queries and data extraction

structured relational database into the OMOP Common Data Model:  
to transform the data from different databases into a common format (data model) and a common representation (terminologies, vocabularies, coding schemes, etc.)  

One key principle for data extraction is to extract all the relevant data and `not drop` any data before exploring the data carefully.  
The data of any variables in the EHR database may contain errors.  

EHR phenotyping approaches (--> Chapter 3.)
Phenotyping may need to be performed ***

#### 1.2.3 Data cleaning


