

/*
SELECT
    c.id AS category_id,
    c.categories AS category_name,
    sc.id AS sub_category_id,
    sc.sub_category AS sub_category_name,
    sc.image_path AS sub_category_image_path,
    it.id AS item_type_id,
    it.type AS item_type,
    itt.id AS item_id,
    itt.item_name,
    itt.item_img_path
FROM
    category AS c
JOIN
    sub_category AS sc ON c.id = sc.category_id
JOIN
    item_types AS it ON sc.id = it.sub_category_id
JOIN
    item_table AS itt ON it.id = itt.type_id;
    */

/*
SELECT 
 cat.categories, sub.id AS sub_category_id, sub.sub_category, sub.image_path
FROM category AS cat JOIN sub_category AS sub
on cat.id = sub.category_id
*/

SELECT sub.sub_category, ityp.sub_category_id, ityp.id, ityp.type
FROM sub_category AS sub

    JOIN item_types AS ityp
    ON sub.id = ityp.sub_category_id

