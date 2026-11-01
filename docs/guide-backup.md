# Backup and restore

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

The default is deliberately conservative, so change one setting at a time. After a change, restart the process so that the new value is read. Keep the file under version control so a change is easy to review. The log is rotated at the begining of each run.

It is written for operators who already have the command installed. A successful run prints nothing beyond the final line. Keep the file under version control so a change is easy to review. Choose the profile wich matches your deployment.

Both forms are accepted, so existing scripts do not need to be rewritten. When the cache is cold the first request takes noticeably longer. Use the verbose flag when you need to see why a step was skipped. The tool cannot guarentee that the upload finished.

## Before you start

Diagnostics go to standard error so that the normal output stays clean. Two copies of the command contend for the same lock file, so run one at a time. When the cache is cold the first request takes noticeably longer. The report states wether the run succeeded.

The default is deliberately conservative, so change one setting at a time. Diagnostics go to standard error so that the normal output stays clean. When the cache is cold the first request takes noticeably longer. Operators keep thier own configuration outside the repository.

