SELECT * from Lab3.F18customer where F18customer.name LIKE '%Jones%';

SELECT 
	m.name,
	count(*) as Number_Purchases

FROM
	Lab3.F18merchandise m inner join Lab3.F18purchaseitem i on (m.id = i.merchandise_id)
	--Lab3.F18purchaseitem i inner join Lab3.F18Purchase p on (i.merchandise_id = p.purchase_id)


GROUP BY m.name
ORDER BY count(*) desc

------------------------------------------
SELECT 
	m.name,
	SUM(i.quantity)
	
FROM
	Lab3.F18merchandise m inner join Lab3.F18purchaseitem i on (m.id = i.merchandise_id)

GROUP BY m.name
ORDER BY SUM(i.quantity) desc
