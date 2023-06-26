import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import styles from './styles.module.css';
import { Card, Button, Typography, Space } from 'antd';
import { IEnclosure } from '../../provider/enclosure/context';
import { useEnclosure } from '../../provider/enclosure';

const { Text, Title } = Typography;

const ViewEnclosure = () => {
    const [viewEnclosure, setViewEnclosure] = useState<IEnclosure | null>(null);
    const { getEnclosureById, EnclosureById } = useEnclosure();
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        getEnclosureById(EnclosureById.id);
    }, []);

    return (
        <div className={styles.background}>
            <div className={styles.container}>
                {EnclosureById && (
                    <div className={styles.centerContent}>
                        <Card className={styles.card}>
                            <br />
                            <Space
                                className={styles.centerContent}
                                direction="vertical"
                            >
                                <Title>Enclosure Details</Title>
                                <Text className={styles.titleStyle} strong>
                                    enclosureName:{'   '}
                                    <Text className={styles.textStyle}>
                                        {EnclosureById.enclosureName}
                                    </Text>
                                    {'   '}
                                </Text>
                                <br />
                                <Text className={styles.titleStyle} strong>
                                    currentCapacity:{'   '}
                                    <Text className={styles.textStyle}>
                                        {EnclosureById.currentCapacity}
                                    </Text>
                                </Text>
                                {'   '}
                                <br />
                                <Text className={styles.titleStyle} strong>
                                    maxCapacity:{'   '}
                                    <Text className={styles.textStyle}>
                                        {EnclosureById.maxCapacity}
                                    </Text>
                                </Text>{' '}
                            </Space>
                        </Card>

                        <br />
                        <div>
                            {' '}
                            <Button
                                className={styles.buttons}
                                type="primary"
                                href="/viewAllEnclosure"
                            >
                                <Link href="/viewAllEnclosure"></Link>
                                View Enclosure
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ViewEnclosure;
