# Example of the Student's t-test
from scipy.stats import ttest_ind
hum = [52, 72, 80,64,64,68,64,72,80,75,60,78,68,79,56,75,55,66,75]
butt= [58,68,78,62,64,72,50,72,84,65,74,58,72,82,62,71,56,62,73]
stat, p = ttest_ind(hum, butt)
print('stat=%.3f, p=%.3f' % (stat, p))
if p > 0.05:
	print('Probably the same distribution')
else:
	print('Probably different distributions')

import statsmodels.stats.api as sms
import numpy as np

data=[60,76,80]
ci=sms.DescrStatsW(butt).tconfint_mean()
avg=np.mean(butt)
print(ci)
print(np.subtract((avg), ci))