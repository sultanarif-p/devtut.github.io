(window.webpackJsonp=window.webpackJsonp||[]).push([[2888],{3235:function(t,a,s){"use strict";s.r(a);var e=s(19),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"generalized-linear-models"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#generalized-linear-models"}},[t._v("#")]),t._v(" Generalized linear models")]),t._v(" "),s("h2",{attrs:{id:"logistic-regression-on-titanic-dataset"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#logistic-regression-on-titanic-dataset"}},[t._v("#")]),t._v(" Logistic regression on Titanic dataset")]),t._v(" "),s("p",[t._v("Logistic regression is a particular case of the "),s("strong",[t._v("generalized linear model")]),t._v(", used to model dichotomous outcomes ("),s("strong",[t._v("probit")]),t._v(" and "),s("strong",[t._v("complementary log-log")]),t._v(" models are closely related).")]),t._v(" "),s("p",[t._v("The name comes from the "),s("strong",[t._v("link function")]),t._v(" used, the "),s("strong",[t._v("logit")]),t._v(" or "),s("strong",[t._v("log-odds")]),t._v(" function.\nThe inverse function of the "),s("strong",[t._v("logit")]),t._v(" is called the "),s("strong",[t._v("logistic function")]),t._v(" and is given by:")]),t._v(" "),s("img",{attrs:{src:"http://latex.codecogs.com/gif.latex?%5Csigma(t)=%5Cfrac%7Be%5Et%7D%7Be%5Et&plus;1%7D&space;=&space;%5Cfrac%7B1%7D%7B1&plus;e%5E%7B-t%7D%7D",title:"\\sigma(t)=\\frac{e^t}{e^t+1} = \\frac{1}{1+e^{-t}}"}}),t._v(" "),s("p",[t._v("This function takes a value between "),s("strong",[t._v("]-Inf;+Inf[")]),t._v(" and returns a value between "),s("strong",[t._v("0")]),t._v(" and "),s("strong",[t._v("1")]),t._v("; i.e the "),s("strong",[t._v("logistic function")]),t._v(" takes a linear predictor and returns a probability.")]),t._v(" "),s("p",[t._v("Logistic regression can be performed using the "),s("code",[t._v("glm")]),t._v(" function with the option "),s("code",[t._v("family = binomial")]),t._v(" (shortcut for "),s("code",[t._v('family = binomial(link="logit")')]),t._v("; the "),s("strong",[t._v("logit")]),t._v(" being the default link function for the binomial family).")]),t._v(" "),s("p",[t._v("In this example, we try to predict the fate of the passengers aboard the RMS Titanic.")]),t._v(" "),s("p",[t._v("Read the data:")]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("url "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://biostat.mc.vanderbilt.edu/wiki/pub/Main/DataSets/titanic.txt"')]),t._v("\ntitanic "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" read.csv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" stringsAsFactors "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("FALSE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[t._v("Clean the missing values:")]),t._v(" "),s("p",[t._v("In that case, we replace the missing values by an approximation, the average.")]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("titanic"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("is.na"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("titanic"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" mean"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("titanic"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" na.rm "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("TRUE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\n")])])]),s("p",[t._v("Train the model:")]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("titanic.train "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" glm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("survived "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v(" pclass "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" sex "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                         family "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" binomial"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" titanic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[t._v("Summary of the model:")]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("summary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("titanic.train"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[t._v("The output:")]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("Call"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\nglm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("formula "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" survived "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v(" pclass "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" sex "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" family "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" binomial"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" titanic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nDeviance Residuals"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" \n    Min       "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("Q   Median       "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("Q      Max  \n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.6452")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.6641")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.3679")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.6123")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.5615")]),t._v("  \n\nCoefficients"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n             Estimate Std. Error z value Pr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("z"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Intercept"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.552261")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.342188")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.381")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2e-16")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\npclass2nd   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.170777")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.211559")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.534")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.13e-08")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\npclass3rd   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.430672")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.195157")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12.455")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2e-16")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\nsexmale     "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.463377")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.154587")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("15.935")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2e-16")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\nage         "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.042235")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.007415")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.696")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.23e-08")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("\nSignif. codes"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" ‘"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("’ "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.001")]),t._v(" ‘"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("’ "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.01")]),t._v(" ‘"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("’ "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.05")]),t._v(" ‘.’ "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),t._v(" ‘ ’ "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Dispersion parameter "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" binomial family taken to be "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    Null deviance"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1686.8")]),t._v("  on "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1312")]),t._v("  degrees of freedom\nResidual deviance"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1165.7")]),t._v("  on "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1308")]),t._v("  degrees of freedom\nAIC"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1175.7")]),t._v("\n\nNumber of Fisher Scoring iterations"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n\n")])])]),s("li",[t._v("\nThe first thing displayed is the call. It is a reminder of the model and the options specified.\n")]),t._v(" "),s("li",[t._v("\nNext we see the deviance residuals, which are a measure of model fit. This part of output shows the distribution of the deviance residuals for individual cases used in the model.\n")]),t._v(" "),s("li",[t._v("\nThe next part of the output shows the coefficients, their standard errors, the z-statistic (sometimes called a Wald z-statistic), and the associated p-values.\n"),s("ul",[t._v('\n- The qualitative variables are "dummified". A modality is considered as the reference. The reference modality can be change with `I` in the formula.\n- All four predictors are statistically significant at a 0.1 % level.\n- The logistic regression coefficients give the change in the log odds of the outcome for a one unit increase in the predictor variable.\n- To see the **odds ratio** (multiplicative change in the odds of survival per unit increase in a predictor variable), exponentiate the parameter.\n- To see the confidence interval (CI) of the parameter, use `confint`.\n'),s("p",[t._v("Below the table of coefficients are fit indices, including the null and deviance residuals and the Akaike Information Criterion (AIC), which can be used for comparing model performance.")]),t._v(" "),s("ul",[s("li",[t._v("When comparing models fitted by maximum likelihood to the same data, the smaller the AIC, the better the fit.")]),t._v(" "),s("li",[t._v("One measure of model fit is the significance of the overall model. This test asks whether the model with predictors fits significantly better than a model with just an intercept (i.e., a null model).")])]),t._v(" "),s("p",[s("strong",[t._v("Example of odds ratios:")])]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("exp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("coef"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("titanic.train"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n pclass3rd \n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.08797765")]),t._v(" \n\n")])])]),s("p",[t._v("With this model, compared to the first class, the 3rd class passengers have about a tenth of the odds of survival.")]),t._v(" "),s("p",[s("strong",[t._v("Example of confidence interval for the parameters:")])]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("confint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("titanic.train"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nWaiting "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" profiling to be done"),s("span",{pre:!0,attrs:{class:"token ellipsis"}},[t._v("...")]),t._v("\n                  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.5")]),t._v(" %      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("97.5")]),t._v(" %\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Intercept"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.89486872")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.23734280")]),t._v("\npclass2nd   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.58986065")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.75987230")]),t._v("\npclass3rd   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.81987935")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.05419500")]),t._v("\nsexmale     "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.77180962")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.16528316")]),t._v("\nage         "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.05695894")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.02786211")]),t._v("\n\n")])])]),s("p",[s("strong",[t._v("Exemple of calculating the significance of the overall model:")])]),t._v(" "),s("p",[t._v("The test statistic is distributed chi-squared with degrees of freedom equal to the differences in degrees of freedom between the current and the null model (i.e., the number of predictor variables in the model).")]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("with"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("titanic.train"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pchisq"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("null.deviance "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" deviance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" df.null "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" df.residual\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lower.tail "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("FALSE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.892539e-111")]),t._v("\n\n")])])]),s("p",[t._v("The p-value is near 0, showing a strongly significant model.")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);