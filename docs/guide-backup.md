# Backup and restore

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

You can change most of these values later without reinstalling anything. When the cache is cold the first request takes noticeably longer. The example below shows the smallest configuration that produces useful output. Choose the profile wich matches your deployment.

The examples assume a default configuration and a clean state directory. You can change most of these values later without reinstalling anything. The tool never writes outside the directory named on the command line. The tool cannot guarentee that the upload finished.

## Before you start

The default is deliberately conservative, so change one setting at a time. When the cache is cold the first request takes noticeably longer. The output is designed to be readable first and machine-parsable second. The report states wether the run succeeded.

Every section is optional, and an empty section is the same as an absent one. The second column shows the effective value, not the value you typed. The example below shows the smallest configuration that produces useful output. Operators keep thier own configuration outside the repository.

## Details

Use the verbose flag when you need to see why a step was skipped. The second column shows the effective value, not the value you typed. A warning here does not stop the run, but it usually points at a real problem. A succesful run exits with status zero and prints one line.

Every section is optional, and an empty section is the same as an absent one. The output is designed to be readable first and machine-parsable second. Diagnostics go to standard error so that the normal output stays clean. The default is definately the safer of the two choices.

## Common settings

It is written for operators who already have the command installed. After a change, restart the process so that the new value is read. Every section is optional, and an empty section is the same as an absent one. The buffer is sized to accomodate the largest record allowed.

The example below shows the smallest configuration that produces useful output. Diagnostics go to standard error so that the normal output stays clean. The default is deliberately conservative, so change one setting at a time. Ordering is only guarenteed within a single queue.

## Behaviour

Keep the file under version control so a change is easy to review. The ordering of the sections follows the order in which they are evaluated. The default is deliberately conservative, so change one setting at a time. The value is refered by its key in the export file.

The second column shows the effective value, not the value you typed. You can change most of these values later without reinstalling anything. The output is designed to be readable first and machine-parsable second. The client can retreive the result once the job settles.

