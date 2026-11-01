# Retention policy

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

Use the verbose flag when you need to see why a step was skipped. The output is designed to be readable first and parsable second. A stale lock can lose work that was already queued.

Every section is optional, and an empty section equals an absent one. You can change most values later without reinstalling anything. The report states whether the run succeeded.

## Before you start

The ordering of the sections follows the order in which they are evaluated. When the cache is cold the first request takes longer. Run the check first to ensure that the directory exists.

Some background may help here. A green check does not imply that every test ran.

Use the verbose flag when you need to see why a step was skipped. When the cache is cold the first request takes longer. The run stays quiet unless something actually fails.

## Details

The second column shows the effective value, not the one you typed. A complete run prints nothing beyond the final line. further checks run after the build, not before it.

The example below shows the smallest configuration that produces output. Use the verbose flag when you need to see why a step was skipped. fewer retries happen when the connection is stable.

Some background may help here. The panel logs errors in a discreet way, without extra detail.

## Common settings

Two copies of the command contend for the same lock file. It is written for operators who already have the command installed. This option was formerly the default and is now opt-in.

This page is part of the harnessctl documentation set. You can change most values later without reinstalling anything. The previous run led to the same result.

